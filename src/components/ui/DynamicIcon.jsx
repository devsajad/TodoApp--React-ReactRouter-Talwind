import { icons } from "lucide-react";
import { cn } from "../../lib/utils";

export const DynamicIcon = ({ name, color }) => {
  const colorVariants = {
    green: "text-green-700",
    blue: "text-blue-700",
    pink: "text-pink-700",
    red: "text-red-700",
    orange: "text-orange-700",
    amber: "text-amber-700",
    indigo: "text-indigo-700",
    purple: "text-violet-700",
  };

  const defaultColor = "bg-gray-100 text-gray-800 hover:bg-gray-200";

  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={cn("size-5", colorVariants[color] || defaultColor)}
    />
  );
};
