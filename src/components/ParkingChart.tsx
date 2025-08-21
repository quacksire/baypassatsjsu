"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        parking: 7500,
        demand: 12500,
    },
];

export default function ParkingChart() {
    return (
        <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis type="category" hide />
                    <Bar dataKey="parking" stackId="a" fill="#939597">
                        <LabelList
                            dataKey="parking"
                            position="center"
                            content={({ x, y, width, height }) => (
                                <text
                                    x={Number(x) + Number(width) / 2}
                                    y={Number(y) + Number(height) / 2}
                                    textAnchor="middle"
                                    dy=".35em"
                                    fill="white"
                                    fontSize="16"
                                >
                                    Parking Spots
                                </text>
                            )}
                        />
                    </Bar>
                    <Bar dataKey="demand" stackId="a" fill="#FEBE30">
                        <LabelList
                            dataKey="demand"
                            position="center"
                            content={({ x, y, width, height }) => (
                                <text
                                    x={Number(x) + Number(width) / 2}
                                    y={Number(y) + Number(height) / 2}
                                    textAnchor="middle"
                                    dy=".35em"
                                    fill="#000"
                                    fontSize="16"
                                >
                                    Demand
                                </text>
                            )}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
