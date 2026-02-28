import { AlertCircle, Server, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import IconWrapper from "@/components/ui/IconWrapper";
import { Button } from "@/components/ui/button";
import { storageCategories, storageData } from "@/modules/Dashboard/constants";

const StorageWidget = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <IconWrapper icon={<Server className="h-4 w-4" />} />
        <span className="text-sm font-medium text-[#64748b]">Storage</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="relative w-52 h-52 sm:w-72 sm:h-72 shrink-0 flex items-center justify-center mx-auto sm:mx-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={storageData}
                cx="50%"
                cy="50%"
                innerRadius="52%"
                outerRadius="78%"
                paddingAngle={1}
                dataKey="value"
                stroke="none"
              >
                {storageData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div
              className="w-[42%] h-[42%] rounded-full border-4 border-dashed border-[#a855f7] flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-bold text-slate-900 leading-tight">80%</span>
              <span className="text-base text-slate-500">Used</span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="border border-[6px] border-t-0 border-b-0 border-amber-500 rounded-lg px-3 py-2.5 mb-3 flex gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" aria-hidden />
           <div>
              <span className="text-[#a855f7] font-bold">Note</span>
            <p className="text-xs text-amber-900">
              You&apos;ve almost reached your limit. You have used 80% of your available storage. Upgrade plan to access more space.
            </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 text-xs mb-3">
            {storageCategories.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-sm shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
        
          <Button variant="outline"  className="w-full sm:w-auto border-primary text-primary">
            <Zap className="h-4 w-4" />
            Upgrade Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StorageWidget;
