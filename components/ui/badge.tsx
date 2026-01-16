import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-active focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-border bg-bg-secondary text-text-primary",
                secondary:
                    "border-transparent bg-bg-elevated text-text-secondary",
                outline:
                    "border-border text-text-secondary bg-transparent",
                success:
                    "border-success-muted bg-success-muted/20 text-success",
                tech:
                    "border-border bg-bg-secondary text-text-secondary hover:text-text-primary",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
