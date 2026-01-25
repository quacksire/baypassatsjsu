"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const commuterData = [
    { name: "Off-campus", value: 87 },
    { name: "On-campus", value: 13 },
];
const tripData = [
    { year: "Year 1", SJSU: 0.69 },
    { year: "Year 2", SJSU: 0.74 },
];
const transferData = [
    { year: "Year 1", SJSU: 5.56 },
    { year: "Year 2", SJSU: 6.91 },
];
const attritionData = [{ label: "Attrition Reduction", value: 6 }];

const COLORS = ["#1A5BB4", "#D2D2D2"];

export default function BaypassImpactCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Chart 1 – Commuter Pie */}
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-black">Commuter Campus</p>
                <p className="text-lg text-neutral-700">
                    87% of students live off campus, and 38% commute using
                    public transit.
                </p>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={commuterData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                            >
                                {commuterData.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Chart 2 – Trips Bar */}
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-black">
                    BayPass Boosts Ridership
                </p>
                <p className="text-lg text-neutral-700">
                    Students using BayPass took more trips year over year.
                </p>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={tripData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis tickFormatter={(v) => `${v * 100}%`} />
                            <Tooltip
                                formatter={(v) =>
                                    `${Math.round(Number(v) * 100)}%`}
                            />
                            <Bar dataKey="SJSU" fill="#1A5BB4" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Chart 3 – Transfers Bar */}
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-black">
                    Transfers Between Agencies Skyrocketed
                </p>
                <p className="text-lg text-neutral-700">
                    BayPass encouraged complex, multi-agency trips - real
                    regional use.
                </p>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={transferData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis tickFormatter={(v) => `${v * 100}%`} />
                            <Tooltip
                                formatter={(v) =>
                                    `${Math.round(Number(v) * 100)}%`}
                            />
                            <Bar dataKey="SJSU" fill="#FEBE30" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Chart 4 – Attrition Reduction */}
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold text-black">
                    Student Success Improved
                </p>
                <p className="text-lg text-neutral-700">
                    Attrition dropped by <strong>6%</strong>{" "}
                    during BayPass implementation.
                </p>
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attritionData} layout="vertical">
                            <XAxis type="number" unit="%" domain={[0, 10]} />
                            <YAxis type="category" dataKey="label" />
                            <Tooltip formatter={(v) => `${v}%`} />
                            <Bar dataKey="value" fill="#1A5BB4" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
