import * as React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Separator({ orientation = "horizontal", className = "", ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={
        orientation === "vertical"
          ? `w-px h-6 bg-gray-200 dark:bg-gray-700 ${className}`
          : `h-px w-full bg-gray-200 dark:bg-gray-700 ${className}`
      }
      {...props}
    />
  );
} 