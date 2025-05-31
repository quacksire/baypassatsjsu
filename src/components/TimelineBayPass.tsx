"use client";
import { Timeline } from "./ui/timeline.tsx";

export default function TimelineBaypass() {
    const data = [
        {
            title: "2022",
            content: (
                <p>
                    <strong className="font-semibold">BayPass Phase 1 Pilot —</strong>{" "}
                    7,000 Spartans got to experience free access to all bus, rail, and ferry
                    services in the nine-county Bay Area region.
                </p>
            ),
        },
        {
            title: "2024",
            content: (
                <p>
                    <strong className="font-semibold">Phase 2 Vetoed —</strong>{" "}
                    San Jose State University administration vetoes renewing BayPass for
                    Phase 2 continuation, despite overwhelming usage in the Phase 1 pilot.
                </p>
            ),
        },
        {
            title: "Now",
            content: (
                <p>
                    We’re continuing to organize for equitable transit access at SJSU and beyond.
                    Stay tuned.
                </p>
            ),
        },
    ];

    return <Timeline data={data} />;
}
