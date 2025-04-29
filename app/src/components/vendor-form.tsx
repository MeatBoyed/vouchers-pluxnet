"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, } from "lucide-react"
import { cn } from "@/lib/utils"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { sendVoucherToCustomer } from '@/lib/voucher-manager'
import { isValidPhoneNumber } from "react-phone-number-input"
import { PhoneInput } from "./ui/phone-input"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

type vendors = {
    name: string;
    id: string;
    phone_number: string | null;
    created_at: Date | null;
}

type formProps = {
    vendors: vendors[];
    availableVouchers: {
        type: string;
        count: number;
        price: string
    }[]
}

// const VoucherTypes = [
//     "daily", "weekly", "monthly"
// ]

// Define the form schema with Zod
const formSchema = z.object({
    phoneNumber: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    vendor: z.string({ required_error: "Please select a vendor" }),
    type: z.enum([
        "daily",
        "weekly",
        "monthly",
    ], {
        required_error: "Please select a vendor",
    })
})

// Type for our form values
type FormValues = z.infer<typeof formSchema>

export default function VendorForm({ availableVouchers, vendors }: formProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState("")

    // Initialize the form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
        },
    })


    const onSubmit = async (data: FormValues) => {
        setServerError("");
        setIsSubmitting(true);

        console.log("Submitted Data: ", data)

        try {
            const result = await sendVoucherToCustomer(data.phoneNumber, data.vendor, data.type);

            if (!result.success) {
                throw new Error(result.error || "Unknown error");
            }

            setIsSuccess(true);
            toast.success("Voucher sent successfully!", {
                description: `Voucher Successfully Redeemed! Thanks for choosing PluxNet Fibre 😄`,
            })
            form.reset();

            // Optionally show success toast/snackbar here

        } catch (error) {
            console.error(error);
            // if (error instanceof MBVError) {
            //     toast.error("Failed to send voucher", {
            //         description: `${error.code} - ${error.message}`,
            //     })
            // } else {
            //     toast.error("Failed to send voucher", {
            //         description: "An error occurred while sending the voucher. Please try again. If the error persists please contact our support team.",
            //     })
            // }
            toast.error("Failed to send voucher", {
                description: "An error occurred while sending the voucher. Please try again. If the error persists please contact our support team.",
            })
            setServerError(error instanceof Error ? error.message : "An Unexpected error occured.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center mb-8 mt-4 flex-col">
                <Image src="/logo_blue.png" alt="Logo" width={200} height={150} />
                <h1 className="text-3xl font-bold text-pink-600">Voucher Portal</h1>
            </div>

            <Card className="w-full p-0 max-w-md border-pink-200 shadow-lg">
                <CardHeader className="bg-pink-600 text-white rounded-t-lg py-3">
                    <CardTitle className="text-xl">Vouchers Loader</CardTitle>
                    <CardDescription className="text-pink-100">Enter customer details to send a hotspot voucher</CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Customer Phone Number</FormLabel>
                                        <FormControl>
                                            <PhoneInput countries={["ZA"]} defaultCountry="ZA" placeholder="Enter a phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-gray-700">Select Voucher</FormLabel>
                                        <FormControl>
                                            <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                                                {/* {VoucherTypes.map((voucher, index) => (
                                                    <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200" key={index}>
                                                        <RadioGroupItem value={voucher} id={voucher} />
                                                        <FormLabel htmlFor={voucher} className="flex-1 cursor-pointer font-normal">
                                                            {voucher}
                                                        </FormLabel>
                                                    </div>
                                                ))} */}
                                                {availableVouchers.map((voucher, index) => (
                                                    <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200" key={index}>
                                                        <RadioGroupItem value={voucher.type} id={voucher.type} />
                                                        <FormLabel htmlFor={voucher.type} className="flex-1 cursor-pointer font-normal">
                                                            {/* {voucher.type.to()} ({voucher.count} available) */}
                                                            {/* Capatilize Type */}
                                                            {voucher.type.charAt(0).toUpperCase() + voucher.type.slice(1)} - {voucher.price} ({voucher.count} Available)
                                                        </FormLabel>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="vendor"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-gray-700">Vendor</FormLabel>
                                        <FormControl>
                                            <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                                                {vendors.map((vendor, index) => (
                                                    <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200" key={index}>
                                                        <RadioGroupItem value={vendor.id} id={vendor.id} />
                                                        <FormLabel htmlFor={vendor.id} className="flex-1 cursor-pointer font-normal">
                                                            {vendor.name}
                                                        </FormLabel>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {serverError && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{serverError}</div>}

                            {isSuccess && (
                                <div className="bg-green-50 text-green-600 p-3 rounded-md flex items-center">
                                    <Check className="h-5 w-5 mr-2" />
                                    {/* <span>SMS voucher sent successfully!</span> */}
                                    <span>Voucher Successfully Redeemed!</span>
                                    <span>Thanks for choosing PluxNet Fibre 😄</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className={cn(
                                    "w-full bg-pink-600 hover:bg-pink-700 text-white",
                                    isSubmitting && "opacity-70 cursor-not-allowed",
                                )}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Voucher SMS"}
                            </Button>
                        </form>
                    </Form>
                    <CardFooter className="bg-gray-50 rounded-b-lg flex flex-col gap-2 justify-center items-center text-center pt-4 text-xs" >
                        <p className="">Limited use to only Approved Vendors. By using this product you agree to our Terms & Conditions.</p>
                        <Link href="https://pluxnet.co.za" className="">Product of PluxNet Fibre.</Link>
                    </CardFooter>
                </CardContent>
            </Card>
        </div>
    )
}
