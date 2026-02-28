import IconWrapper from "@/components/ui/IconWrapper";
import { List, BarChart3, Files } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { fileSharingData, PUBLIC_COLOR, ANYONE_WITH_LINK_COLOR, WITHIN_ORG_COLOR } from "@/modules/Dashboard/constants";

const FileSharingWidget = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-2 mb-5">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <IconWrapper icon={<Files className="w-4 h-4" />} />
            File Sharing
          </h3>
          <p className="text-sm text-slate-500">
            Keep track of your files and how they are shared.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-1.5 rounded hover:bg-slate-100 transition-colors"
            aria-label="List view"
          >
            <List className="w-4 h-4 text-[#64748b]" />
          </button>
          <button
            className="p-1.5 rounded bg-[#2563eb]/10 text-[#2563eb]"
            aria-label="Chart view"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
          <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={fileSharingData} barGap={0} barCategoryGap="12%" margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
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
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              fontSize: 12,
            }}
            formatter={(value: number, name: string) => [
              value,
              name === "public" ? "Public" : name === "anyoneWithLink" ? "Anyone with link" : "Within Organisation",
            ]}
            labelFormatter={(label) => `${label}`}
          />
          <Bar dataKey="public" stackId="a" fill={PUBLIC_COLOR} radius={[0, 0, 0, 0]} name="Public" />
          <Bar dataKey="anyoneWithLink" stackId="a" fill={ANYONE_WITH_LINK_COLOR} radius={[0, 0, 0, 0]} name="Anyone with link" />
          <Bar dataKey="withinOrg" stackId="a" fill={WITHIN_ORG_COLOR} radius={[4, 4, 0, 0]} name="Within Organisation" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-3 text-xs text-[#64748b]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: PUBLIC_COLOR }} /> Public
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: ANYONE_WITH_LINK_COLOR }} /> Anyone with link
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: WITHIN_ORG_COLOR }} /> Within Organisation
        </span>
      </div>
    </div>
  );
};

export default FileSharingWidget;
