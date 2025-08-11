// components/ui/NavbarBaypass.tsx
"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function NavbarBaypass() {
    const THRESH_PX = 50
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        console.log("scrolled")

        // if path is in this list, then we should set true by default, without
        // waiting for scroll event
        let excludedPaths = [
            "/yell",
        ];
        if (excludedPaths.includes(window.location.pathname)) {
            setScrolled(true);
        }

        window.addEventListener("scroll", () => {
            if (excludedPaths.includes(window.location.pathname)) {
                setScrolled(true);
            } else {
                setScrolled(window.scrollY > THRESH_PX);
            }
        })
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <nav className={`navbar  ${scrolled ? 'scrolled' : ''}`} id={'nav'}>
                <div className="whitespace-nowrap"><Logo/></div>
                <ul className="flex gap-8 text-md font-black uppercase shade-color-auggold">
                    <li className="hover:drop-2 transition duration-200"><a href="#">Home</a></li>
                    <li className="hover:drop-2 transition duration-200"><a href="https://sjsu.qualtrics.com/jfe/form/SV_bDvakzIZSe3K3mm?source=Website">Petition</a></li>
                    <li className="hover:drop-2 transition duration-200"><a href="/#who">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
