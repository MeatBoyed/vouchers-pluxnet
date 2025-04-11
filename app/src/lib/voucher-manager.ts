import { VoucherService } from './voucher-service';

// const smsApiSend = async (phoneNumber: string, code: string) => {
//     // Replace with actual SMS/WhatsApp integration
//     try {
//         console.log(`Sending SMS: ${code} to ${phoneNumber}`);
//         // Simulate success response
//         return { success: true };
//     } catch (err) {
//         throw new Error(`SMS service failed: ${err.message}`);
//     }
// };

const smsApiSend = async (phoneNumber: string, message: string) => {
    try {
        const url = new URL("https://sms.connect-mobile.co.za/submit/single");
        url.searchParams.append("da", phoneNumber); // e.g. +27837072977
        url.searchParams.append("ud", message);     // e.g. "Your voucher code is: VOUCH123"

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.SMS_API_TOKEN}`,
            },
            redirect: "follow",
        });

        if (response.status === 202) {
            return { success: true };
        }

        const text = await response.text();
        throw new Error(`SMS API responded with status ${response.status}: ${text}`);
    } catch (error: any) {
        console.error("SMS API Error:", error);
        return { success: false, error: error.message };
    }
};


export const sendVoucherToCustomer = async (phoneNumber: string, vendorId: string) => {
    const service = new VoucherService();

    try {
        // Step 1: Find available voucher
        const voucher = await service.getAvailableVoucher();

        // Step 2: Upsert customer
        const customer = await service.findOrCreateCustomer(phoneNumber);

        // Step 3: Get vendor
        const vendor = await service.getVendorById(vendorId);

        // Step 4: Send SMS
        const result = await smsApiSend(phoneNumber, voucher.code);
        if (!result.success) {
            throw new Error("SMS failed to send.");
        }

        // Step 5: Update voucher status
        await service.markVoucherAsSent(voucher.id, customer.id, vendor.id);

        return {
            success: true,
            message: "Voucher sent successfully!",
            code: voucher.code
        };

    } catch (error: any) {
        console.error("Voucher Flow Error:", error.message);
        return {
            success: false,
            error: error.message
        };
    }
};
