import { errorHandler, MBVError } from "./errors";
import prisma from "./prisma";

export class VoucherService {
    async findOrCreateCustomer(phoneNumber: string) {
        try {
            return await prisma.customers.upsert({
                where: { phone_number: phoneNumber },
                update: {},
                create: { phone_number: phoneNumber }
            });
        } catch (error) {
            console.error(`Failed to create or retrieve customer: ${error instanceof Error ? error.message : "Unknown error"}`);
            throw errorHandler(error)
        }
    }

    async getVendors() {
        try {
            return await prisma.vendors.findMany();
        } catch (error) {
            console.error(`Failed to retrieve vendors: ${error instanceof Error ? error.message : "Unknown error"}`);
            throw errorHandler(error)
        }
    }

    async getVendorById(vendorId: string) {
        const vendor = await prisma.vendors.findUnique({ where: { id: vendorId } });
        if (!vendor) {
            console.error("Vendor not found.");
            throw new MBVError(
                "Vendor not found",
                "VENDOR_NOT_FOUND",
                `Vendor with ID ${vendorId} does not exist.`
            );
        }
        return vendor;
    }

    async getAvailableVoucher(voucherType: string) {
        const voucher = await prisma.vouchers.findFirst({
            where: { is_redeemed: false, sent: false, type: voucherType }
        });
        if (!voucher) {
            console.error("No available vouchers.");
            throw new MBVError(
                "No available vouchers",
                "NO_VOUCHERS_AVAILABLE",
                `No vouchers available for type ${voucherType}.`
            );
        }
        return voucher;
    }

    async getAvailableVouchers() {
        try {
            // Query which Voucher Types are available and the amount of them
            const vouchers = await prisma.vouchers.groupBy({
                by: ['type'],
                where: { is_redeemed: false, sent: false },
                _count: {
                    type: true
                }
            })
            // return vouchers.map(voucher => ({
            //     type: voucher.type,
            //     count: voucher._count.type
            // }))
            if (!vouchers || vouchers.length === 0) return []
            // @ts-expect-error
            return vouchers.map(voucher => {
                switch (voucher.type) {
                    case "daily":
                        return {
                            type: voucher.type,
                            count: voucher._count.type,
                            price: "R5"
                        }
                    case "weekly":
                        return {
                            type: voucher.type,
                            count: voucher._count.type,
                            price: "R30"
                        }
                    case "monthly":
                        return {
                            type: voucher.type,
                            count: voucher._count.type,
                            price: "R99"
                        }
                    default:
                        return {
                            type: "",
                            count: 0,
                            price: ""
                        }
                }
            })
        } catch (error) {
            console.error(`Failed to retrieve available vouchers: ${error instanceof Error ? error.message : "Unknown error"}`);
            throw errorHandler(error)
        }
    }

    async markVoucherAsSent(voucherId: string, customerId: string, vendorId: string) {
        try {
            return await prisma.vouchers.update({
                where: { id: voucherId },
                data: {
                    is_redeemed: true,
                    redeemed_at: new Date(),
                    customer_id: customerId,
                    vendor_id: vendorId,
                    sent: true,
                    sent_at: new Date()
                }
            });
        } catch (error) {
            console.error(`Failed to mark voucher as sent: ${error instanceof Error ? error.message : "Unknown error"}`);
            throw errorHandler(error)
        }
    }
}
