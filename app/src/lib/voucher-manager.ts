"use server"
import { VoucherService } from './voucher-service';

const smsApiSend = async (phoneNumber: string, voucherCode: string) => {
    const message = `Your voucher code is: ${voucherCode} - PluxNet Voucher`;
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
    } catch (error) {
        console.error("SMS API Error:", error);
        return { success: false, error: error instanceof Error ? error.message : "SMS API error" };
    }
};


export const sendVoucherToCustomer = async (phoneNumber: string, vendorId: string, voucherType: string) => {
    const service = new VoucherService();
    console.log("Service initated")

    try {
        // Step 1: Find available voucher
        const voucher = await service.getAvailableVoucher(voucherType);
        if (!voucher) {
            throw new Error("No available vouchers.");
        }
        console.log("Available Voucher: ", voucher)

        // Step 2: Upsert customer
        const customer = await service.findOrCreateCustomer(phoneNumber);
        console.log("Customer: ", customer)

        // Step 3: Get vendor
        const vendor = await service.getVendorById(vendorId);
        console.log("Fetched Vendor: ", vendor)

        // Step 4: Send SMS
        const result = await smsApiSend(phoneNumber, voucher.code);
        if (!result.success) {
            throw new Error("SMS failed to send.");
        }
        console.log("Send SMS: ", result)

        // Step 5: Update voucher status
        await service.markVoucherAsSent(voucher.id, customer.id, vendor.id);
        console.log("Voucher marked as sent!", result)

        return {
            success: true,
            message: "Voucher sent successfully!",
            code: voucher.code
        };

    } catch (error) {
        console.error("Voucher Flow Error:", error instanceof Error ? error.message : "Unknown error - Voucher Manager");
        return {
            success: false,
            error: "An error occurred while processing the voucher. Please contact support, via our live chat.",
        };
    }
};
