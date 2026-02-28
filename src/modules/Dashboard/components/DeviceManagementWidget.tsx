import {
  Monitor,
  Users,
  Mail,
  Plug,
  Unplug,
  Power,
  Send,
  Inbox,
  Building2,
  MailOpen,
  Zap,
  ChevronDown,
} from "lucide-react";
import StatCard from "./StatCard";
import { deviceTypeCardsData, userTypesData, emailStatusData } from "@/modules/Dashboard/constants";

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 4h7v7H3V4zm11 0h7v7h-7V4zM3 13h7v7H3v-7zm11 0h7v7h-7v-7z" fill="#0078D4" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
        fill="#1a1a1a"
      />
    </svg>
  );
}

function LinuxTuxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="4.5" />
      <path d="M7 12.5c0 2 2.5 3.5 5 3.5s5-1.5 5-3.5" />
      <path d="M9 7h.01M15 7h.01" />
      <path d="M12 9.5v1.5" />
      <path d="M8 14.5s1.5 1.5 4 1.5 4-1.5 4-1.5" />
    </svg>
  );
}

const deviceTypeIcons = [WindowsIcon, AppleIcon, LinuxTuxIcon];
const deviceTypeCards = deviceTypeCardsData.map((d, i) => ({ ...d, Icon: deviceTypeIcons[i] }));

const userTypeIcons = [Building2, Users, Users];
const userTypes = userTypesData.map((u, i) => ({ ...u, icon: userTypeIcons[i] }));

const emailStatusIcons = [MailOpen, Mail];
const emailStatusList = emailStatusData.map((e, i) => ({ ...e, icon: emailStatusIcons[i] }));

interface DeviceManagementWidgetProps {
  showTitle?: boolean;
}

const DeviceManagementWidget = ({ showTitle = true }: DeviceManagementWidgetProps) => {
  return (
    <div className="space-y-4 min-w-0">
      {showTitle && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 flex items-center gap-2 min-w-0 truncate">
            <Monitor className="w-5 h-5 text-[#2563eb]" />
            Device Management Dashboard
          </h2>
          <div className="flex items-center gap-1">
            <button className="bg-[#2563eb] text-white text-xs font-medium pl-3 pr-2 py-2 rounded-l-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              Upgrade Plan
            </button>
            <button className="bg-[#2563eb] text-white p-2 rounded-r-lg hover:opacity-90 transition-opacity">
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={Monitor} title="Number Of Devices" value="3,836" change={15} />
        <StatCard icon={Users} title="Users" value="3,836" change={-15} />
        <StatCard icon={Mail} title="Emails" value="316" change={-23} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex divide-x divide-slate-200 min-w-0">
          <div className="flex-1 flex items-center gap-3 pr-4 min-w-0">
            <Plug className="w-5 h-5 text-slate-500 shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Plugged</p>
              <p className="text-xl font-bold text-slate-900">1,923</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 pl-4">
            <Unplug className="w-5 h-5 text-slate-500 shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Unplugged</p>
              <p className="text-xl font-bold text-slate-900">1,913</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex divide-x divide-slate-200 min-w-0">
          <div className="flex-1 flex items-center gap-3 pr-4 min-w-0">
            <Power className="w-5 h-5 text-[#16a34a] shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Active</p>
              <p className="text-xl font-bold text-slate-900">592</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 pl-4">
            <Power className="w-5 h-5 text-[#dc2626] shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Offline</p>
              <p className="text-xl font-bold text-slate-900">3,836</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex divide-x divide-slate-200 min-w-0">
          <div className="flex-1 flex items-center gap-3 pr-4 min-w-0">
            <Send className="w-5 h-5 text-slate-500 shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Sent</p>
              <p className="text-xl font-bold text-slate-900">592</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 pl-4">
            <Inbox className="w-5 h-5 text-slate-500 shrink-0" />
            <div>
              <p className="text-xs font-medium text-slate-500">Received</p>
              <p className="text-xl font-bold text-slate-900">3,836</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 min-w-0">
          {deviceTypeCards.map((d) => (
            <div
              key={d.name}
              className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <div className="mb-2 sm:mb-3 flex justify-center">
                <d.Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <p className="text-sm font-semibold text-slate-900">{d.name}</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {d.value} {d.unit}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">User Type</h3>
          <ul className="space-y-3">
            {userTypes.map((u) => (
              <li key={u.name} className="flex justify-between items-center text-sm">
                <span className="text-slate-600 flex items-center gap-2">
                  <u.icon className="w-4 h-4 text-slate-500" />
                  {u.name}
                </span>
                <span className="font-medium text-slate-900">
                  {u.value} {u.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Email Status</h3>
          <ul className="space-y-3">
            {emailStatusList.map((e) => (
              <li key={e.label} className="flex justify-between items-center text-sm">
                <span className="text-slate-600 flex items-center gap-2">
                  <e.icon className="w-4 h-4 text-slate-500" />
                  {e.label}
                </span>
                <span className="font-medium text-slate-900">
                  {e.value} {e.unit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagementWidget;
