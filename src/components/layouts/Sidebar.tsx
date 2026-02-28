import {
  LayoutDashboard,
  Cloud,
  FolderOpen,
  Settings,
  BarChart3,
  Users,
  HelpCircle,
  CreditCard,
  User,
  FolderInput,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Cloud, label: "Organization & Reg." },
  { icon: FolderOpen, label: "Reporting" },
  { icon: CreditCard, label: "Billing" },
  { icon: User, label: "Account" },
  { icon: FolderInput, label: "Storage" },
  { icon: Settings, label: "Settings" },
  { icon: Smartphone, label: "Device Management" },
  { icon: BarChart3, label: "Productivity Report" },
];

const bottomItems = [
  { icon: Users, label: "Users" },
  { icon: HelpCircle, label: "Support" },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const Sidebar = ({ open = false, onClose, isMobile = false }: SidebarProps) => {
  const [active, setActive] = useState("Dashboard");

  const handleNavClick = (label: string) => {
    setActive(label);
    if (isMobile && onClose) onClose();
  };

  const aside = (
    <aside
      className={
        isMobile
          ? `fixed inset-y-0 left-0 z-50 w-60 min-h-screen flex flex-col shrink-0 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`
          : "w-60 min-h-screen flex flex-col shrink-0 bg-white border-r border-slate-200"
      }
    >
      <div className="flex items-center justify-between py-4 px-3 border-b border-slate-200 md:border-b-0 md:py-6 md:justify-center">
        <h1 className="text-xl font-bold text-slate-900 md:text-2xl">Snaarp</h1>
        {isMobile && (
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 md:hidden"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto py-2">
        {menuItems.map((item, idx) => {
          const isActiveItem = active === item.label;
          return (
            <button
              key={`${item.label}-${idx}`}
              onClick={() => handleNavClick(item.label)}
              className={`w-full flex items-center gap-3 pl-3 pr-3 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                isActiveItem
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <item.icon className={`w-4 h-4 shrink-0 ${isActiveItem ? "text-primary font-bold" : "text-slate-500"}`} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="px-3 pb-4 border-t border-slate-200 pt-4 mt-2 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            onClick={() => isMobile && onClose && onClose()}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <item.icon className="w-4 h-4 shrink-0 text-slate-500" />
            {item.label}
          </button>
        ))}
        <div className="flex items-center gap-3 px-3 py-3 mt-2">
          <Avatar className="h-9 w-9 border-2 border-slate-200 shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">CG</AvatarFallback>
          </Avatar>
          <div className="text-left min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Christina Grant</p>
            <p className="text-xs text-slate-500 truncate">Support</p>
          </div>
        </div>
      </div>
    </aside>
  );

  if (isMobile) {
    return (
      <>
        {open && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden"
            onClick={onClose}
            aria-label="Close menu"
          />
        )}
        {aside}
      </>
    );
  }

  return aside;
};

export default Sidebar;
