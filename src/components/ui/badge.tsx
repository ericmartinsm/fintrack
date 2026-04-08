import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "danger" | "warning" | "info" | "secondary";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-slate-100 text-slate-800 border-slate-200",
      success: "bg-success-50 text-success-700 border-success-200",
      danger: "bg-danger-50 text-danger-700 border-danger-200",
      warning: "bg-warning-50 text-warning-700 border-warning-200",
      info: "bg-primary-50 text-primary-700 border-primary-200",
      secondary: "bg-slate-100 text-slate-600 border-slate-200",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
