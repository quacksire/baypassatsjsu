import React, { useId, useMemo, useState } from "react";

"use client";

export interface EmailYellProps {
    to?: string[];
    bcc?: string[];
    subject?: string;
    heading?: string;
    className?: string;
    placeholder?: string;
    bodyTemplate?: (name: string) => string;
}

const defaultBody = (name: string) =>
    `Hello, my name is ${name}.

I’m writing to support making the Clipper BayPass available to SJSU students. Unlimited, affordable transit helps students get to class, work, and activities across the Bay Area.

Thanks for your consideration.

Best,
${name}`;

function StepIcon(
    { n, size = 32, className = "" }: {
        n: number;
        size?: number;
        className?: string;
    },
) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            className={`shrink-0 ${className}`}
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="16" cy="16" r="16" fill="#E5A823" />
            <text
                x="16"
                y="16"
                dominantBaseline="middle"
                textAnchor="middle"
                fontWeight={900}
                fontSize="16"
                fill="#0055A2"
                fontFamily="inherit"
            >
                {n}
            </text>
        </svg>
    );
}

export default function EmailYell({
    to = ["cynthia.matson@sjsu.edu", "sjsupres@sjsu.edu"],
    bcc = ["shout@baypassatsjsu.com"],
    subject = "Student support for BayPass at SJSU",
    heading = "Tell the SJSU President you want BayPass!",
    className = "",
    placeholder = "e.g., Sam Jeffs",
    bodyTemplate = defaultBody,
}: EmailYellProps) {
    const [name, setName] = useState("");
    const inputId = useId();
    const helpId = useId();

    const mailto = useMemo(() => {
        const displayName = name.trim() || "a student";
        const body = bodyTemplate(displayName);

        const params = new URLSearchParams();
        if (bcc?.length) params.set("bcc", bcc.join(","));
        params.set("subject", subject);
        params.set("body", body);
        const qs = params.toString();

        return `mailto:${to.join(",")}${qs ? `?${qs}` : ""}`;
    }, [name, to, bcc, subject, bodyTemplate]);

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        window.location.href = mailto;
    };

    return (
        <section
            style={{ margin: "24px" }}
            className={`max-w-xl rounded-2xl border-2 border-sjsugold bg-white p-8 shade-color-sjsugold drop-6 ${className}`}
        >
            <h1 className="text-5xl font-black text-sjsublue mb-6">
                {heading}
            </h1>
            <h2>
                We made a simple tool that emails Cynthia Teniente-Matson
                showing your support for BayPass. Every email will help us to
                demonstrate that students want affordable and equitable transit
                now!
            </h2>

            {/* Steps */}
            <h3 className="text-3xl font-black text-sjsublue mb-6 mt-3">
                Instructions
            </h3>
            <ol className="space-y-3 mb-8 list-none">
                <li className="flex items-center gap-3">
                    <StepIcon n={1} />
                    <span className="text-lg text-sjsublue">
                        Enter your name
                    </span>
                </li>
                <br />
                <li className="flex items-center gap-3">
                    <StepIcon n={2} />
                    <span className="text-lg text-sjsublue">
                        Press{" "}
                        <span className="font-semibold">Send the email</span>
                    </span>
                </li>
            </ol>

            {/* Form */}
            <form className="space-y-5" onSubmit={onSubmit}>
                <div>
                    <label
                        htmlFor={inputId}
                        className="block text-lg font-semibold text-sjsublue"
                    >
                        Your name
                    </label>
                    <input
                        id={inputId}
                        name="name"
                        type="text"
                        placeholder={placeholder}
                        className="mt-2 w-full rounded-xl border-2 border-sjsublue/20 px-4 py-3 text-lg text-sjsublue placeholder:text-clipper focus:border-sjsublue focus:outline-none focus:ring-4 focus:ring-sjsublue/20"
                        aria-describedby={helpId}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        className="cursor-pointer inline-block rounded-xl bg-sjsugold px-6 py-3 font-black uppercase tracking-wide text-white shadow-md transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sjsugold/40"
                    >
                        Send the email
                    </button>
                    <span className="text-sm text-clipper" aria-live="polite">
                        Subject: {subject}
                    </span>
                </div>

                <p id={helpId} className="text-xs text-clipper">
                    This opens your email app with a pre‑filled message to{" "}
                    <span className="font-medium">{to.join(" and ")}</span>
                    {bcc?.length
                        ? (
                            <>
                                {" "}with{" "}
                                <span className="font-medium">
                                    {bcc.join(", ")}
                                </span>{" "}
                                BCC’d.
                            </>
                        )
                        : (
                            "."
                        )}
                    <br />
                    {`By sending the email, you agree to let us use your email
                    address and message content to track sent emails and send
                    you updates on the campaign. Your email won't be shared with
                    anyone, and you may opt-out by removing the BCC. Thanks!`}
                </p>
            </form>
        </section>
    );
}

/** Usage in Astro (example):
 *
 * ---
 * import Layout from "../layouts/Layout.astro";
 * import EmailYell from "../components/EmailYell.tsx";
 * ---
 * <Layout>
 *   <main class="w-full px-6 py-16 md:px-12 lg:px-24">
 *     <EmailYell client:load />
 *   </main>
 * </Layout>
 */
