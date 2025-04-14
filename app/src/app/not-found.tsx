import Link from "next/link"
import { FileQuestion } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] py-10 text-center">
            <div className="flex flex-col items-center space-y-6 max-w-md">
                <div className="rounded-full bg-muted p-6">
                    <FileQuestion className="h-12 w-12 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">404 - Page Not Found</h1>
                    <p className="text-muted-foreground">
                        We couldn&apos;t find the page you were looking for. The page might have been moved, deleted, or might never have
                        existed.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                        <Link href="/">Go to Home</Link>
                    </Button>

                </div>
            </div>
        </div>
    )
}
