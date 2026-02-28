import { Users, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { onlineUsers } from "@/modules/Dashboard/constants";

const OnlineUsersWidget = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#2563eb]" />
          Online Users
        </h3>
        <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90">
          <Plus className="w-4 h-4 mr-1" />
          Add New User
        </Button>
      </div>
      <p className="text-sm text-slate-500 mb-4">
        Here you can monitor your comprehensive online users.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left">
              <th className="py-3 px-3 font-medium text-slate-700">Name</th>
              <th className="py-3 px-3 font-medium text-slate-700">Location</th>
              <th className="py-3 px-3 font-medium text-slate-700">Organization</th>
              <th className="py-3 px-3 font-medium text-slate-700">Devices</th>
              <th className="py-3 px-3 font-medium text-slate-700">Channel Activity</th>
              <th className="py-3 px-3 font-medium text-slate-700">Total Usage</th>
            </tr>
          </thead>
          <tbody>
            {onlineUsers.map((u, i) => (
              <tr
                key={i}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
              >
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        u.online ? "bg-emerald-500" : "bg-slate-300"
                      }`}
                    />
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="bg-primary/20 text-primary text-xs">
                        {u.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-slate-900">{u.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600">{u.location}</td>
                <td className="py-3 px-3 text-slate-600">{u.org}</td>
                <td className="py-3 px-3 text-slate-600">
                  <div className="flex gap-1">
                    {u.devices.map((d) => (
                      <span key={d} className="text-xs">
                        {d === "Windows" ? "🪟" : d === "Mac" ? "🍎" : d === "Linux" ? "🐧" : "📱"}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600">
                  <div className="flex gap-1">
                    {u.channels.map((c) => (
                      <span key={c} className="text-xs">
                        {c === "Chrome" ? "🌐" : c === "Teams" ? "💬" : c === "Instagram" ? "📷" : c === "Slack" ? "💼" : "▶️"}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-600">{u.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnlineUsersWidget;
