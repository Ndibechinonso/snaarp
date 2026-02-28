import { AppWindow, Globe, MoreHorizontal } from "lucide-react";
import { apps, webActivities } from "@/modules/Dashboard/constants";

const AppActivityWidget = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <AppWindow className="w-5 h-5 text-[#2563eb]" />
            App Activity Report
          </h3>
          <div className="flex items-center gap-2">
            <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700">
              <option>Add new users</option>
            </select>
            <button
              className="p-1.5 rounded hover:bg-slate-100 transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal className="w-4 h-4 text-[#64748b]" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 px-2 font-medium text-slate-600">Applications</th>
                <th className="py-2 px-2 font-medium text-slate-600">Total Users</th>
                <th className="py-2 px-2 font-medium text-slate-600">Time Number of Users</th>
                <th className="py-2 px-2 font-medium text-slate-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((a, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-2 px-2 flex items-center gap-2">
                    <span className="text-base">
                      {a.name === "Google Chrome" ? "🌐" : a.name === "YouTube" ? "▶️" : a.name === "WhatsApp" ? "📱" : a.name === "Instagram" ? "📷" : "✈️"}
                    </span>
                    {a.name}
                  </td>
                  <td className="py-2 px-2 text-slate-600">{a.users}</td>
                  <td className="py-2 px-2 text-slate-600">{a.time}</td>
                  <td className="py-2 px-2 text-slate-600">{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Web Activity
          </h3>
          <select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700">
            <option>Today</option>
          </select>
        </div>
        <div className="space-y-3">
          {webActivities.map((w) => (
            <div key={w.name} className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-700 w-20 shrink-0 truncate">
                {w.name}
              </span>
              <div className="flex-1 min-w-0">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#16a34a] rounded-full transition-all"
                    style={{ width: `${w.percent}%` }}
                  />
                </div>
              </div>
              <span className="text-xs text-slate-500 w-16 shrink-0">{w.percent}%</span>
              <span className="text-[10px] text-slate-400 w-20 shrink-0 truncate">{w.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppActivityWidget;
