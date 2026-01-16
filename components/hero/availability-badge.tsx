import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
    available?: boolean;
    text?: string;
    className?: string;
}

export function AvailabilityBadge({
    available = true,
    text = "Available for Work",
    className,
}: AvailabilityBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-3 py-1.5 text-sm",
                className
            )}
        >
            {/* Animated pulse dot */}
            <span className="relative flex h-2 w-2">
                {available && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                )}
                <span
                    className={cn(
                        "relative inline-flex h-2 w-2 rounded-full",
                        available ? "bg-success" : "bg-gray-medium"
                    )}
                />
            </span>
            <span className="text-text-primary">{text}</span>
        </div>
    );
}
