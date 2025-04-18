import { cn } from "@/lib/utils";
import { Label } from "./label"
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
    label: string;
    children: React.ReactNode;
    className?: string;
    error?:FieldError;
    
}

export const FieldWrapper = ({ label, className,children,error }: FieldWrapperProps) => {
    return (
        <div className={cn ("flex flex-col gap-2", className)}>
            <Label>
                {label}
            </Label>
            {children}
            {error && (
                        <p className="text-sm text-red-500">
                            {error.message}
                        </p>
                    )}

        </div>
    )
}