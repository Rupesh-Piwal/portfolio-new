"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ContributionCell } from "./contribution-cell";
import {
    contributionData,
    totalContributions,
    getContributionWeeks,
} from "@/data/contributions";
import { MONTHS } from "@/lib/constants";

export function ContributionGraph() {
    const weeks = getContributionWeeks();

    // Calculate month labels positions
    const monthLabels: { month: string; position: number }[] = [];
    let currentMonth = -1;

    weeks.forEach((week, weekIndex) => {
        const firstDay = week[0];
        if (firstDay) {
            const month = new Date(firstDay.date).getMonth();
            if (month !== currentMonth) {
                currentMonth = month;
                monthLabels.push({
                    month: MONTHS[month],
                    position: weekIndex,
                });
            }
        }
    });

    return (
        <section className="py-8">
            <div className="rounded-2xl border border-border bg-bg-secondary p-6">
                {/* Header */}
                <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
                    GitHub Contributions • @rupeshpiwal
                </h2>

                <TooltipProvider>
                    {/* Month Labels */}
                    <div className="mb-2 flex text-xs text-text-secondary">
                        <div className="w-8" /> {/* Spacer for day labels */}
                        <div className="relative flex-1">
                            {monthLabels.map(({ month, position }) => (
                                <span
                                    key={`${month}-${position}`}
                                    className="absolute text-[10px]"
                                    style={{ left: `${(position / weeks.length) * 100}%` }}
                                >
                                    {month}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Graph Grid */}
                    <div className="flex overflow-x-auto">
                        {/* Day labels */}
                        <div className="mr-2 flex flex-col justify-between py-[2px] text-[10px] text-text-secondary">
                            <span></span>
                            <span>Mon</span>
                            <span></span>
                            <span>Wed</span>
                            <span></span>
                            <span>Fri</span>
                            <span></span>
                        </div>

                        {/* Contribution grid */}
                        <div className="flex gap-[3px]">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-[3px]">
                                    {/* Pad incomplete weeks with empty cells */}
                                    {week.length < 7 &&
                                        weekIndex === 0 &&
                                        Array.from({ length: 7 - week.length }).map((_, i) => (
                                            <div
                                                key={`empty-start-${i}`}
                                                className="h-[10px] w-[10px]"
                                            />
                                        ))}
                                    {week.map((day) => (
                                        <ContributionCell key={day.date} day={day} />
                                    ))}
                                    {/* Pad end of last week */}
                                    {week.length < 7 &&
                                        weekIndex === weeks.length - 1 &&
                                        Array.from({ length: 7 - week.length }).map((_, i) => (
                                            <div
                                                key={`empty-end-${i}`}
                                                className="h-[10px] w-[10px]"
                                            />
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </TooltipProvider>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between text-xs text-text-secondary">
                    <span>{totalContributions.toLocaleString()} contributions in the last year</span>
                    <div className="flex items-center gap-1">
                        <span>Less</span>
                        <div className="flex gap-[2px]">
                            <div className="h-[10px] w-[10px] rounded-[2px] bg-contrib-0" />
                            <div className="h-[10px] w-[10px] rounded-[2px] bg-contrib-1" />
                            <div className="h-[10px] w-[10px] rounded-[2px] bg-contrib-2" />
                            <div className="h-[10px] w-[10px] rounded-[2px] bg-contrib-3" />
                            <div className="h-[10px] w-[10px] rounded-[2px] bg-contrib-4" />
                        </div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
