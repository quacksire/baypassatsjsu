"use client";
import React from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    return (
        <section className="w-full bg-white font-sans px-6 py-16 md:px-12 lg:px-24">
            <h2 className="text-center text-6xl font-semibold tracking-tight text-black mb-12">
                Where we are
            </h2>

            <div className="relative mx-auto max-w-5xl">
                {/* Desktop center line */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-600" />
                {/* Mobile left-aligned line */}
                <div className="md:hidden absolute left-3 top-0 h-full w-1 bg-blue-600" />

                <div className="flex flex-col gap-16">
                    {data.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative w-full flex flex-col md:flex-row ${
                                    isLeft ? "md:justify-start" : "md:justify-end"
                                }`}
                            >
                                <div
                                    className={`relative w-full md:w-1/2 px-6 ${
                                        isLeft ? "md:pr-12 text-left" : "md:pl-12 text-left md:text-right"
                                    }`}
                                >
                                    <h3 className="text-4xl font-extrabold text-black">{item.title}</h3>
                                    <div className="mt-2 text-lg text-neutral-800">{item.content}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
