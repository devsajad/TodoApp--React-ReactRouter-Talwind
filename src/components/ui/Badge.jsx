import React from "react";
import { cn } from "../../lib/utils";

export const Badge = ({ color, children }) => {
  const colorVariants = {
    green: "bg-green-100 hover:bg-green-200",
    blue: "bg-blue-100 hover:bg-blue-200",
    pink: "bg-pink-100 hover:bg-pink-200",
    red: "bg-red-100 hover:bg-red-200",
    orange: "bg-orange-100 hover:bg-orange-200",
    amber: "bg-amber-100 hover:bg-amber-200",
    indigo: "bg-indigo-100 hover:bg-indigo-200",
    purple: "bg-violet-100 hover:bg-violet-200",
  };

  const defaultColor = "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <span
      className={cn(
        "text-sm bg-green-100 rounded-md px-[6px] py-1",
        colorVariants[color] || defaultColor
      )}
    >
      {children}
    </span>
  );
};
