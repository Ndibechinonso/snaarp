import { cn } from "@/lib/utils";

const IconWrapper = ({ icon, className }: { icon: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("p-2 rounded-sm bg-slate-100", className)}>
      {icon}
    </div>
  );
};

export default IconWrapper;