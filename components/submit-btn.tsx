"use client";

import { FaPaperPlane } from "react-icons/fa";
import clsx from "clsx";

interface SubmitBtnProps {
  pending: boolean;
  className?: string;
  label?: string;
}

export default function SubmitBtn({ pending, className, label = "Submit" }: SubmitBtnProps) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "group inline-flex items-center justify-center gap-2",
        "h-11 px-7 rounded-full text-sm font-medium",
        // Base colors (light)
        "bg-gray-900 text-white",
        "hover:bg-black",
        // Dark mode inversion
        "dark:bg-white/10 dark:text-white dark:ring-1 dark:ring-white/15",
        "dark:hover:bg-white/15",
        // Focus & transition
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900",
        "dark:focus-visible:ring-white dark:focus-visible:ring-offset-0",
        "transition-all",
        // Scale effects
        "hover:scale-[1.03] active:scale-[0.98]",
        // Disabled
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100",
        className
      )}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-white/30 dark:border-t-white" />
          <span className="tracking-wide">{label}…</span>
        </span>
      ) : (
        <>
          <span>{label}</span>
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[2px]" />
        </>
      )}
    </button>
  );
}
