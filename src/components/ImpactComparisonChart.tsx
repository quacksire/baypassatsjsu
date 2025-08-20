"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        category: "Transit Trips",
        "BayPass-wide": 30,
        "SJSU Avg": 52,
    },
    {
        category: "Transfers",
        "BayPass-wide": 163,
        "SJSU Avg": 393.25,
    },
];

export default function ImpactHorizontalComparison() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" unit="%" />
                    <YAxis dataKey="category" type="category" />
                    <Tooltip
                        formatter={(value) => {
                            const num = typeof value === "number"
                                ? value
                                : Number(value);
                            return `${num.toFixed(1)}%`;
                        }}
                    />
                    <Legend />
                    <Bar dataKey="BayPass-wide" fill="#1A5BB4" />
                    <Bar dataKey="SJSU Avg" fill="#FEBE30" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
