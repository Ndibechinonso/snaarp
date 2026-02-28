import IconWrapper from "@/components/ui/IconWrapper";
import { User } from "lucide-react";
import { countries } from "@/modules/Dashboard/constants";

const ActiveUsersWidget = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <IconWrapper icon={<User className="w-5 h-5" />} />
          Active Users
        </h3>
        <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700">
          <option>Month</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-[180px] rounded-lg bg-slate-100 flex flex-col items-center justify-center border border-slate-200 relative">
          <p className="text-xs font-medium text-slate-600 mb-1">ASHOK NAGAR</p>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-1 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Stanley
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Chowe
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Map view</p>
        </div>
        <div className="space-y-3">
          {countries.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <span className="text-lg shrink-0">{c.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-900 truncate">{c.name}</span>
                  <span className="text-xs text-slate-500 shrink-0">{c.percent}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all bg-[#16a34a]"
                    style={{ width: `${c.percent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersWidget;
