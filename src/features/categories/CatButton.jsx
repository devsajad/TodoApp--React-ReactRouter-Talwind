import { useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import { DynamicIcon } from "../../components/ui/DynamicIcon";

export const CatButton = ({ iconName, text, color, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCatClick() {
    searchParams.set("category", id);
    setSearchParams(searchParams);
  }

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
    <button
      onClick={handleCatClick}
      className={cn(
        "group p-8 rounded-lg duration-300 flex justify-center items-start gap-2 font-medium",
        colorVariants[color] || defaultColor
      )}
    >
      <DynamicIcon name={iconName} color={color} />

      <p className="text-neutral-800">{text}</p>
    </button>
  );
};
