// components/ui/HeroSectionBaypass.tsx
import diridon from '../assets/diridon.jpg';

"use client";

export default function HeroSectionBaypass() {
    return (
        <section className="relative min-h-[calc(100vh)] w-full">
            {/* Background Image */}
            <img
                src={diridon.src}
                alt="BayPass Poster"
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10"/>

            {/* Hero Content */}
            <div className="flex h-screen items-center px-8 md:px-16 lg:px-32">
                <div className="max-w-4xl text-white">
                    <p className="text-4xl md:text-5xl font-medium mb-2">
                    <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
                      Spartans
                    </span>{" "}
                        deserve
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight text-white drop-shadow-[3px_3px_0_theme(colors.orange.400)]">
                        Affordable and<br/>
                        Equitable Transit.
                    </h1>

                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-blue-700 px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wide text-white hover:bg-blue-800 transition"
                        >
                            Sign the Petition
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
