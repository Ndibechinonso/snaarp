import { ClipboardList, Clock, Calendar, Users, Globe, Zap, ChevronDown } from "lucide-react";
import StatCard from "./StatCard";

interface ProductivityWidgetProps {
  showTitle?: boolean;
}

const ProductivityWidget = ({ showTitle = true }: ProductivityWidgetProps) => {
  return (
    <div className="space-y-4">
      {showTitle && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#2563eb]" />
            Productivity Report
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Clock}
          title="Hours Productivity"
          value="576 Hrs"
          change={-15}
        />
        <StatCard
          icon={Calendar}
          title="Days Activity"
          value="267 Days"
          change={8}
        />
        <StatCard icon={Users} title="Users" value="3,836" change={-8} />
        <StatCard
          icon={Globe}
          title="Web Activity"
          value="178 Activities"
          change={1}
        />
      </div>
    </div>
  );
};

export default ProductivityWidget;
