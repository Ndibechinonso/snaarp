import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface TopBarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const TopBar = ({ onMenuClick, showMenuButton = false }: TopBarProps) => {
  return (
    <header className="py-3 md:py-4 bg-white border-b border-slate-200 flex items-center justify-between gap-3 px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
        {showMenuButton && (
          <button
            type="button"
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 shrink-0 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <div className="flex-1 min-w-0 max-w-md">
          <Input
            prefix={<Search className="w-4 h-4 text-slate-400 shrink-0" />}
            type="text"
            placeholder="Search for users, groups or settings"
            className="bg-white text-sm text-slate-900 placeholder:text-slate-500 outline-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <button
          className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-[#64748b]" />
        </button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">A</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopBar;
