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
        "hidden md:flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-2 py-1 text-[10px] font-mono",
        className,
      )}
    >
      {/* Animated pulse dot */}
      <span className="relative flex h-[5px] w-[5px]">
        {available && (
          <span className="absolute inline-flex h-[5px] w-[5px] animate-ping rounded-full bg-success opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex h-[5px] w-[5px] rounded-full",
            available ? "bg-success" : "bg-gray-medium",
          )}
        />
      </span>
      <span className="text-[10px] font-thin font-mono">{text}</span>
    </div>
  );
}
