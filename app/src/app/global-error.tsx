"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface GlobalErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global application error:", error)
    }, [error])

    return (
        <html lang="en">
            <body>
                <div className="container flex flex-col items-center justify-center min-h-screen py-10 text-center">
                    <div className="flex flex-col items-center space-y-6 max-w-md">
                        <div className="rounded-full bg-destructive/10 p-6">
                            <AlertTriangle className="h-12 w-12 text-destructive" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tight">Critical Error</h1>
                            <p className="text-muted-foreground">
                                A critical error has occurred. We apologize for the inconvenience.
                            </p>
                            {error.digest && <p className="text-xs text-muted-foreground mt-2">Error ID: {error.digest}</p>}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button onClick={reset}>Reload Application</Button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
