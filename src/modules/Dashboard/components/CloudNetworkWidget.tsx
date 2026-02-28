import { Layers, Users, Upload } from "lucide-react";
import StatCard from "./StatCard";

interface CloudNetworkWidgetProps {
  showTitle?: boolean;
}

const CloudNetworkWidget = ({ showTitle = true }: CloudNetworkWidgetProps) => {
  return (
    <div className="space-y-4">
      {showTitle && (
        <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-[#2563eb]">●</span>
          Cloud Network
        </h2>
      )}
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={Users} title="Groups" value="316" change={23} />
        <StatCard icon={Users} title="Departments" value="316" change={-23} />
        <StatCard icon={Upload} title="Uploads" value="316" change={23} />
        <StatCard icon={Layers} title="Levels" value="3,836" change={-12} />
      </div>
    </div>
  );
};

export default CloudNetworkWidget;
