"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@/types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="rounded-xl border border-border bg-bg-secondary p-4">
            <Accordion type="single" collapsible>
                <AccordionItem value={experience.id} className="border-b-0">
                    <AccordionTrigger className="py-0 hover:no-underline">
                        <div className="flex items-center gap-4">
                            {/* Company Logo */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-bg-primary overflow-hidden">
                                <Image
                                    src={experience.logo}
                                    alt={experience.company}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="text-left">
                                <h3 className="font-semibold text-text-primary">
                                    {experience.company}
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    {experience.role} ({experience.type})
                                </p>
                            </div>
                        </div>

                        {/* Duration */}
                        <span className="mr-2 text-sm text-text-muted">
                            {experience.duration}
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="pt-4">
                        <p className="mb-3 text-text-secondary">{experience.description}</p>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                            {experience.details.map((detail, index) => (
                                <li key={index} className="text-sm">
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
