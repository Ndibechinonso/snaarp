import { TrendingDown, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { sparkData } from "@/modules/Dashboard/constants";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: number;
  subtitle?: string;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  subtitle = "Compared to last week",
}: StatCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow min-w-0">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 text-[#64748b] shrink-0" />
        <span className="text-sm font-medium text-[#64748b]">{title}</span>
      </div>
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-900">{value}</span>
          <span
            className={`flex items-center gap-0.5 text-xs font-medium ${
              isPositive ? "text-[#16a34a]" : "text-[#dc2626]"
            }`}
          >
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isPositive ? "+" : "-"}
            {Math.abs(change)}%
          </span>
        </div>
        <div className="w-12 h-8 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`spark-${title.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "")}`} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={isPositive ? "#16a34a" : "#dc2626"}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={isPositive ? "#16a34a" : "#dc2626"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={isPositive ? "#16a34a" : "#dc2626"}
                fill={`url(#spark-${title.replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "")})`}
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="text-sm text-[#64748b]">{subtitle}</p>
    </div>
  );
};

export default StatCard;
