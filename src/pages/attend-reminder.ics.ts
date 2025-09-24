import type { APIRoute } from "astro";


export const GET: APIRoute = async () => {
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BayPass at SJSU//Public Forum//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH

BEGIN:VEVENT
UID:publicforum-20250924@sjsu.edu
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:20250924T220000Z
DTEND:20250925T003000Z
SUMMARY:Public Forum (In-Person or Zoom)
LOCATION:Student Union Meeting Room 1A, San José State University; Zoom (https://sjsu.zoom.us/j/85916216835)
DESCRIPTION:📍 Student Union Room 1A (second floor) OR join online via Zoom\\n🛜 Zoom link: https://sjsu.zoom.us/j/85916216835 (Meeting ID: 85916216835)\\n\\n📅 September 24th, 2025\\n🕒 3:00 PM – 5:30 PM (arrive/join 5 minutes early)\\n👟 Plan to arrive at least 5 minutes early so you can sign-in!\\n\\nYou've been sent a copy of what you filled out, which includes our speech writing tips and details on how Public Forum works. BayPass at SJSU organizers Sam and/or Zyjay will be at the Student Union to help with sign-in. If joining on Zoom, sign in using the chat so you can speak. We'll see you there!
END:VEVENT

END:VCALENDAR`;

    return new Response(ics, {
        headers: {
            "Content-Type": "text/calendar; charset=utf-8",
            "Content-Disposition": "attachment; filename=public-forum.ics",
        },
    });
};
