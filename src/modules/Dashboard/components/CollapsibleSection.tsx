import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  rightContent?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function CollapsibleSection({
  title,
  rightContent,
  defaultOpen = true,
  children,
  icon,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden min-w-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 sm:gap-3 px-4 sm:px-5 py-3 sm:py-4 text-left transition-colors hover:bg-slate-50/80 active:bg-slate-100/80"
        aria-expanded={isOpen}
        aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
      >
        <div className="flex min-w-0 items-center gap-2">
   
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-sm bg-slate-100"> {icon}</div>
           
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 truncate">
            {title}
          </h2>
          </div>
          <span
            className="flex shrink-0 text-slate-500 transition-transform duration-200"
            aria-hidden
          >
            {isOpen ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronUp className="h-5 w-5" />
            )}
          </span>
        </div>
        {rightContent && (
          <span onClick={(e) => e.stopPropagation()}>
            {rightContent}
          </span>
        )}
      </button>
      {isOpen && <div className="border-t border-slate-200 px-4 sm:px-5 pb-4 sm:pb-5 pt-1">{children}</div>}
    </div>
  );
}
