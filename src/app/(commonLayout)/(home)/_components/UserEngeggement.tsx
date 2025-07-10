"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";

// ✅ Demo Static Data
const demoData = [
  { label: "01/2025", totalUser: 3, Activeusers: 2 },
  { label: "02/2025", totalUser: 5, Activeusers: 3 },
  { label: "03/2025", totalUser: 6, Activeusers: 5 },
  { label: "04/2025", totalUser: 7, Activeusers: 6 },
  { label: "05/2025", totalUser: 4, Activeusers: 4 },
  { label: "06/2025", totalUser: 8, Activeusers: 5 },
  { label: "07/2025", totalUser: 9, Activeusers: 6 },
];

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"
];

// ✅ Tooltip Type
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

// ✅ Custom Tooltip Component
const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-md px-3 py-2 shadow-md text-sm">
        <p className="font-semibold text-gray-700">{payload[0]?.payload?.name}</p>
        <p className="text-zinc-950">● Total Users: {payload[0].value}</p>
        <p className="text-zinc-500">● Activer Users: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const UserEngeggement = () => {
  // ✅ Format demoData
  const formattedData = demoData.map((item) => {
    const [monthIndex] = item.label.split("/");
    const monthName = months[parseInt(monthIndex, 10) - 1] || item.label;

    return {
      name: monthName,
      total: item.totalUser,
      active: item.Activeusers,
    };
  });

  return (
    <div className="bg-white rounded-xl p-5 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 items-center">
          <p className="font-semibold text-lg">User Retention</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-zinc-950"></span>
              <span className="text-sm text-gray-600">Total Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-zinc-500"></span>
              <span className="text-sm text-gray-600">Active Users</span>
            </div>
          </div>
        </div>
        <div className="text-sm border px-2 py-1 rounded-md text-gray-600">
          Monthly
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="total"
            stroke="black"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="active"
            stroke="gray"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserEngeggement;
