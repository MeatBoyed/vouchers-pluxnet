"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { sendVoucherToCustomer } from '@/lib/voucher-manager'
import { isValidPhoneNumber } from "react-phone-number-input"
import { PhoneInput } from "./ui/phone-input"

// Define the form schema with Zod
const formSchema = z.object({
    phoneNumber: z
        .string()
        .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    // phoneNumber: z
    //     .string()
    //     .min(10, { message: "Phone number must be at least 10 digits" })
    //     .regex(/^[0-9]+$/, { message: "Please enter a valid phone number" }),
    customerType: z.enum(["resident", "visitor", "business"], {
        required_error: "Please select a customer type",
    }),
})

// Type for our form values
type FormValues = z.infer<typeof formSchema>

export default function VendorForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [serverError, setServerError] = useState("")

    // Initialize the form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            customerType: undefined,
        },
    })


    const onSubmit = async (data: FormValues) => {
        setServerError("");
        setIsSubmitting(true);

        try {
            const result = await sendVoucherToCustomer(data.phoneNumber, data.customerType);

            if (!result.success) {
                throw new Error(result.error || "Unknown error");
            }

            setIsSuccess(true);
            form.reset();

            // Optionally show success toast/snackbar here
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);

        } catch (err: any) {
            console.error(err);
            setServerError(err.message || "Failed to send SMS. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center mb-8 mt-4">
                <Wifi className="h-10 w-10 text-pink-600 mr-2" />
                <h1 className="text-3xl font-bold text-pink-600">PluxNet Fibre</h1>
            </div>

            <Card className="w-full max-w-md border-pink-200 shadow-lg">
                <CardHeader className="bg-pink-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl">Vendor Portal</CardTitle>
                    <CardDescription className="text-pink-100">Enter customer details to send a hotspot voucher</CardDescription>
                </CardHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="pt-6 space-y-6">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Customer Phone Number</FormLabel>
                                        <FormControl>
                                            {/* <Input
                                                placeholder="Enter phone number"
                                                type="tel"
                                                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                                                {...field}
                                            /> */}
                                            <PhoneInput countries={["ZA"]} defaultCountry="ZA" placeholder="Enter a phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="customerType"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel className="text-gray-700">Customer Type</FormLabel>
                                        <FormControl>
                                            <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
                                                <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200">
                                                    <RadioGroupItem value="resident" id="resident" />
                                                    <FormLabel htmlFor="resident" className="flex-1 cursor-pointer font-normal">
                                                        Resident
                                                    </FormLabel>
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200">
                                                    <RadioGroupItem value="visitor" id="visitor" />
                                                    <FormLabel htmlFor="visitor" className="flex-1 cursor-pointer font-normal">
                                                        Visitor
                                                    </FormLabel>
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md border p-3 border-pink-200">
                                                    <RadioGroupItem value="business" id="business" />
                                                    <FormLabel htmlFor="business" className="flex-1 cursor-pointer font-normal">
                                                        Business
                                                    </FormLabel>
                                                </div>
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
                                    <span>SMS voucher sent successfully!</span>
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="bg-gray-50 rounded-b-lg">
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
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
