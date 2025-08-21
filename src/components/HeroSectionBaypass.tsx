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
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="underline decoration-sjsugold decoration-4 underline-offset-4">
                      Spartans
                    </span>{" "}
                        deserve
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-sjsugold shade-color-auggold drop-3">
                        Affordable and<br/>
                        Equitable Transit.
                    </h1>

                    <div className="mt-10">
                        <a
                            href="https://sjsu.qualtrics.com/jfe/form/SV_bDvakzIZSe3K3mm?source=Website"
                            className="inline-block rounded-full bg-sjsublue px-8 py-4 text-sm md:text-base font-extrabold uppercase tracking-wide text-white shade-color-sjsugold active:bg-blue-800 drop-2 hover:drop-6 transition"
                        >
                            Sign the Petition
                        </a>
                        <a
                            href="/thanks"
                            className="ml-4 mt-20 pt-10 text-sm font-extrabold text-sjsugold hover:underline"
                        >
                            Already signed? &gt;
                        </a>
                    </div>

                </div>
            </div>

        </section>
    );
}
