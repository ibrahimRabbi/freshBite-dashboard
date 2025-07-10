// components/NewUsersChart.tsx

"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mo", total: 1500, current: 900 },
  { name: "Tu", total: 2200, current: 1500 },
  { name: "We", total: 1200, current: 800 },
  { name: "Th", total: 2500, current: 1900 },
  { name: "Fr", total: 1000, current: 600 },
  { name: "St", total: 2000, current: 1400 },
  { name: "Su", total: 1400, current: 1000 },
];

export default function NewUsersChart() {
  return (
    <div className="h-[400px] p-10 w-full bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">New Users</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={20}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="total" fill="#e5e5e5" radius={[4, 4, 0, 0]} />
          <Bar dataKey="current" fill="#1a2e05" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
