import type { ContributionDay } from "@/types";

/**
 * Generates realistic GitHub contribution data for the past year
 * Creates a pattern that resembles actual developer activity
 */
function generateContributionData(): ContributionDay[] {
    const contributions: ContributionDay[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    // Start from the beginning of the week (Sunday)
    const startDate = new Date(oneYearAgo);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    let currentDate = new Date(startDate);

    while (currentDate <= today) {
        const dayOfWeek = currentDate.getDay();
        const month = currentDate.getMonth();

        // Generate pseudo-random but consistent contribution count
        // More activity on weekdays, less on weekends
        let count = 0;
        const randomSeed = currentDate.getTime() / 86400000;
        const random = Math.sin(randomSeed * 12.9898) * 43758.5453 % 1;

        // Weekend vs weekday activity patterns
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            // Weekends - less activity
            if (random > 0.6) {
                count = Math.floor(random * 5);
            }
        } else {
            // Weekdays - more activity
            if (random > 0.3) {
                count = Math.floor(random * 15);
            }
        }

        // Seasonal variations - more activity in spring/summer
        if (month >= 3 && month <= 8) {
            count = Math.floor(count * 1.3);
        }

        // Determine contribution level based on count
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (count === 0) level = 0;
        else if (count <= 3) level = 1;
        else if (count <= 6) level = 2;
        else if (count <= 10) level = 3;
        else level = 4;

        contributions.push({
            date: currentDate.toISOString().split("T")[0],
            count,
            level,
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return contributions;
}

export const contributionData = generateContributionData();

export const totalContributions = contributionData.reduce(
    (sum, day) => sum + day.count,
    0
);

/**
 * Groups contribution data by week for rendering the grid
 */
export function getContributionWeeks(): ContributionDay[][] {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    for (const day of contributionData) {
        const dayOfWeek = new Date(day.date).getDay();

        if (dayOfWeek === 0 && currentWeek.length > 0) {
            weeks.push(currentWeek);
            currentWeek = [];
        }

        currentWeek.push(day);
    }

    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    return weeks;
}
