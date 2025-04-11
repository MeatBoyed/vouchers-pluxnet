import VendorForm from "@/components/vendor-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <VendorForm />
      </div>
    </main>
  );
}
