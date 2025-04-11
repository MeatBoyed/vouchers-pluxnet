import prisma from "./prisma";

export class VoucherService {
    async findOrCreateCustomer(phoneNumber: string) {
        try {
            return await prisma.customer.upsert({
                where: { phoneNumber },
                update: {},
                create: { phoneNumber }
            });
        } catch (error: any) {
            throw new Error(`Failed to create or retrieve customer: ${error.message}`);
        }
    }

    async getVendorById(vendorId: string) {
        const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });
        if (!vendor) {
            throw new Error("Vendor not found.");
        }
        return vendor;
    }

    async getAvailableVoucher() {
        const voucher = await prisma.voucher.findFirst({
            where: { isRedeemed: false, sent: false }
        });
        if (!voucher) {
            throw new Error("No available vouchers.");
        }
        return voucher;
    }

    async markVoucherAsSent(voucherId: string, customerId: string, vendorId: string) {
        try {
            return await prisma.voucher.update({
                where: { id: voucherId },
                data: {
                    isRedeemed: true,
                    redeemedAt: new Date(),
                    customerId,
                    vendorId,
                    sent: true,
                    sentAt: new Date()
                }
            });
        } catch (error: any) {
            throw new Error(`Failed to mark voucher as sent: ${error.message}`);
        }
    }
}
