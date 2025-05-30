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
            <div className="absolute inset-0 bg-black/10 -z-10" />

            {/* Hero Content */}
            <div className="flex h-full items-center px-8 py-50 md:px-32 lg:px-64">
                <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl leading-tight text-shadow-2xl">
                        <span className="font-light">
                          <span className="underline decoration-yellow-400 underline-offset-4">Spartans</span> deserve
                        </span>
                        <br />
                        <span className="font-extrabold">affordable and</span><br />
                        <span className="font-extrabold">equitable transit.</span>
                    </h1>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="inline-block rounded-full bg-blue-700 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-800"
                        >
                            Sign The Petition
                        </a>
                    </div>
                </div>
            </div>

            {/* i wanna add a "learn more" chevron in the center of the bottom edge of the section that scrolls down to #info */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <a
                    href="#why"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#why')?.scrollIntoView({behavior: 'smooth'});
                    }}
                    className="inline-block rounded-full bg-white/20 px-4 py-2 text-lg font-semibold text-white hover:bg-white/30 transition-colors"
                >
                    Learn More
                </a>
            </div>

        </section>
    );
}
