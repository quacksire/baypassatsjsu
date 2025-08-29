"use client";
import React from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    return (
        <section className="bg-sjsublue font-sans px-6 py-16 md:px-12 lg:px-24">
            <h2 className="sect-title emph-gg emph-m">
                Where we are now
            </h2>

            <div className="relative mx-auto max-w-5xl">
                {/* Desktop center line */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-sjsugold" />
                {/* Mobile left-aligned line */}
                {/* <div className="md:hidden absolute left-3 top-0 h-full w-1 bg-sjsugold" /> */}

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
                                    className={`relative w-full md:w-1/2 px-6 text-left ${
                                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                    }`}
                                >
                                    <h3 className="text-4xl font-black text-sjsugold shade-color-auggold drop-2 uppercase">{item.title}</h3>
                                    <div className="mt-2 text-lg text-white">{item.content}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
