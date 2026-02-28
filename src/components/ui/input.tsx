import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
  prefix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, ...props }, ref) => {
    const inputEl = (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-slate-200 bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:opacity-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          prefix && "rounded-none border-0 pl-2",
          className,
        )}
        ref={ref}
        {...props}
      />
    );

    if (prefix) {
      return (
        <div className="flex h-10 w-full items-center overflow-hidden rounded-lg border border-slate-200 bg-background">
          <div className="flex shrink-0 items-center justify-center border-r border-slate-200 pl-3 pr-2.5 text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
            {prefix}
          </div>
          {inputEl}
        </div>
      );
    }

    return inputEl;
  },
);
Input.displayName = "Input";

export { Input };
