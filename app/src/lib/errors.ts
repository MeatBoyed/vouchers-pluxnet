import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

// Custom Error Class
export class MBVError extends Error {
    code: string;
    details: string;

    constructor(message: string, code: string, details: string = "") {
        super(message);
        this.name = "MBVError";
        this.code = code;
        this.details = details;
        Object.setPrototypeOf(this, MBVError.prototype);
    }
}

// Error Handler Function
export function errorHandler(error: unknown): MBVError {
    if (error instanceof PrismaClientKnownRequestError) {
        // Handle Prisma-specific errors
        return new MBVError(
            "A DB error occurred",
            error.code,
            error.message
        );
    } else if (error instanceof Error) {
        // Handle generic errors
        return new MBVError(
            "Failed to create delivery due to an unexpected error",
            "UNKNOWN_ERROR",
            error.message
        );
    } else {
        // Handle cases where the error is not an Error instance
        return new MBVError(
            "Failed to create delivery due to an unknown error",
            "UNKNOWN_ERROR",
            "An unknown error occurred"
        );
    }
}