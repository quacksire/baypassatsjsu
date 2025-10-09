"use client";
import { Timeline } from "./ui/timeline.tsx";

export default function TimelineBaypass() {
    const data = [
        {
            title: "2022–2025",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">
                        BayPass Phase 1 Pilot
                    </strong>
                    SJSU participated at no cost to students or the university from{" "}
                    <strong>Aug 2022 through Jun 2025</strong>. Over{" "}
                    <strong className="font-extrabold text-sjsugold">7,000 Spartans</strong> used
                    free, unlimited access to bus, rail, and ferry services across the Bay Area.
                </p>
            ),
        },
        {
            title: "Oct 2024",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">Informal discussions</strong>
                    Several{" "}
                    <span className="font-extrabold text-sjsugold">Associated Students</span> board
                    members discussed{" "}
                    <span className="font-extrabold text-augblue">BayPass</span> outside of a formal
                    meeting. There were conversations about next steps, but{" "}
                    <strong className="font-extrabold">
                        nothing concrete or officially recorded in meeting minutes.
                    </strong>
                </p>
            ),
        },
        {
            title: "2024 to Mar 2025",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">Limited staff capacity</strong>
                    <span className="font-extrabold text-sjsugold">Transportation Solutions</span>{" "}
                    operated with one full-time staff member and one or two student assistants, and
                    had no manager to lead a fee-change workflow. As a result,{" "}
                    <strong className="font-extrabold">
                        no formal action on{" "}
                        <span className="font-extrabold text-augblue">BayPass</span> advanced beyond
                        the October 2024 discussions.
                    </strong>
                </p>
            ),
        },
        {
            title: "Mid 2025",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">
                        Pilot ended with no renewal decision
                    </strong>
                    Phase 1 concluded in June 2025. Because of staff shortages and leadership
                    transitions,{" "}
                    <span className="font-extrabold text-sjsugold">SJSU</span> did not complete the
                    steps required to pursue Phase 2, and{" "}
                    <strong className="font-extrabold">
                        the opportunity to continue{" "}
                        <span className="font-extrabold text-augblue">BayPass</span> was missed.
                    </strong>
                </p>
            ),
        },
        {
            title: "Now",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">Looking forward</strong>
                    We are continuing to organize for equitable, region-wide transit access at{" "}
                    <span className="font-extrabold text-sjsugold">SJSU</span> and pressing for a
                    clear process and timeline on{" "}
                    <span className="font-extrabold text-augblue">BayPass</span>.
                    <br />
                    <a href="/thanks" className="text-sjsugold font-extrabold">
                        Join us to help bring BayPass back.
                    </a>
                </p>
            ),
        },
    ];

    return <Timeline data={data} />;
}
