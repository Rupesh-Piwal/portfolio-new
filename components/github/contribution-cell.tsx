"use client";

import type { ContributionDay } from "@/types";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ContributionCellProps {
    day: ContributionDay;
}

const levelColors = {
    0: "bg-contrib-0",
    1: "bg-contrib-1",
    2: "bg-contrib-2",
    3: "bg-contrib-3",
    4: "bg-contrib-4",
} as const;

export function ContributionCell({ day }: ContributionCellProps) {
    const date = new Date(day.date);
    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
                <div
                    className={cn(
                        "h-[10px] w-[10px] rounded-[2px] transition-transform hover:scale-125",
                        levelColors[day.level]
                    )}
                    aria-label={`${day.count} contributions on ${formattedDate}`}
                />
            </TooltipTrigger>
            <TooltipContent>
                <p className="text-xs">
                    <span className="font-semibold">{day.count} contributions</span>
                    <span className="text-text-secondary ml-1">on {formattedDate}</span>
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
