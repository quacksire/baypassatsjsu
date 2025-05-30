// components/ui/SideBySideSection.tsx
"use client";

import type { ReactNode } from "react";

interface Props {
    sectionTitle: string;
    left: ReactNode;
    right: ReactNode;
}

export default function SideBySideSection({ sectionTitle, left, right }: Props) {
    return (
        <section className="w-full px-6 py-16 md:px-12 lg:px-24">
            <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-black dark:text-white">
                {sectionTitle}
            </h2>
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
                <div className="md:w-1/2 text-3xl font-bold text-black dark:text-white">
                    {left}
                </div>
                <div className="md:w-1/2 text-lg text-neutral-700 dark:text-neutral-300">
                    {right}
                </div>
            </div>
        </section>
    );
}
