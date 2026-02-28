import { Mail } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer as LineResponsive } from "recharts";
import { emailDonutData, emailLineData, EMAIL_CHART_BLUE } from "@/modules/Dashboard/constants";

const EmailChartWidget = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-4 w-full">
          <Mail className="w-5 h-5 text-[#2563eb]" />
          Email Chart
        </h3>
        <div className="relative w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={emailDonutData}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="70%"
                paddingAngle={2}
                dataKey="value"
              >
                {emailDonutData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs font-semibold text-slate-700">TOTAL EMAILS SENT</span>
            <span className="text-xs font-semibold text-slate-700">6,421</span>
          </div>

        </div>
        <div className="flex gap-3 mt-4 text-xs text-[#64748b]">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#2563eb]" /> Received
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#eab308]" /> Send
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#dc2626]" /> Draft
          </span>
        </div>
      </div>
      <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Total Email</h3>
          <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700">
            <option>Year</option>
          </select>
        </div>
        <LineResponsive width="100%" height={220}>
          <LineChart data={emailLineData} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 4000]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e2e8f0",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={EMAIL_CHART_BLUE}
              strokeWidth={2}
              dot={{ fill: EMAIL_CHART_BLUE, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </LineResponsive>
      </div>
    </div>
  );
};

export default EmailChartWidget;
