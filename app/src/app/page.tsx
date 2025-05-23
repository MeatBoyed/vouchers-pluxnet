import VendorForm from "@/components/vendor-form";
import { VoucherService } from "@/lib/voucher-service";

export const dynamic = "force-dynamic";

export default async function Home() {
  const voucherService = new VoucherService();
  const vendors = await voucherService.getVendors();
  const vouchers = await voucherService.getAvailableVouchers();
  console.log("Available Vouchers: ", vouchers);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <VendorForm vendors={vendors} availableVouchers={vouchers} />
      </div>
    </main>
  );
}
