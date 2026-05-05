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
                    <strong className="block font-extrabold mb-1">No formal action taken</strong>
                    During this period,{" "}
                    <span className="font-extrabold text-sjsugold">SJSU</span> did not advance any
                    formal steps toward a{" "}
                    <span className="font-extrabold text-augblue">BayPass</span> renewal. Planning
                    discussions remained on hold at this time.
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
                    Phase 1 concluded in June 2025. Because of internal transitions,{" "}
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
            title: "Jan 2026",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">
                        IRA Fee Development Begins
                    </strong>
                    SJSU launches the <span className="font-extrabold text-sjsugold">
                        Instructionally Related Activities (IRA) fee consultation process
                    </span>. The proposed <strong className="font-extrabold">$184.50 per semester fee</strong> includes{" "}
                    <strong className="font-extrabold">$1.715 million</strong> in new funding to support a Bay Area
                    Clipper Pass pilot for students, alongside athletics, intramurals, Spartan Daily, and student
                    engagement programs.
                </p>
            ),
        },
        {
            title: "May 5, 2026",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">
                        IRA Fee Approved
                    </strong>
                    The IRA fee passed, making{" "}
                    <span className="font-extrabold text-augblue">BayPass</span> a pass funded for all enrolled
                    full-time and part-time <span className="font-extrabold text-sjsugold">SJSU students</span>.
                    This is the turning point: BayPass moves from campaign ask to campus benefit.
                </p>
            ),
        },
        {
            title: "Now",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">Finalizing Implementation</strong>
                    <span className="font-extrabold text-sjsugold">SJSU</span> and{" "}
                    <span className="font-extrabold text-sjsugold">Associated Students</span>, including{" "}
                    <span className="font-extrabold text-sjsugold">AS Transportation Solutions</span>, are busy
                    finalizing the details and implementation under the agreement with the Metropolitan
                    Transportation Commission. That means coordinating the SmartPass transition, student access,
                    and the pieces needed so BayPass is ready to work on August 15.
                    <br />
                    <a href="/ira" className="text-sjsugold font-extrabold">
                        See what the IRA means now →
                    </a>
                </p>
            ),
        },
        {
            title: "Aug 15, 2026",
            content: (
                <p>
                    <strong className="block font-extrabold mb-1">
                        BayPass Starts Working
                    </strong>
                    <span className="font-extrabold text-augblue">BayPass</span> starts working for all enrolled{" "}
                    <span className="font-extrabold text-sjsugold">SJSU students</span>. Existing student
                    SmartPasses move to BayPass, opening up unlimited bus, rail, and ferry access across the
                    nine-county Bay Area region through June 30, 2027.
                </p>
            ),
        },
    ];

    return <Timeline data={data} />;
}
