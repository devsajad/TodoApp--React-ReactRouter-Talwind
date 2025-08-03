import { useSearchParams } from "react-router-dom";


const filterOptions = [
  { label: "همه تسک‌‌ها", value: "all" },
  { label: "انجام شده", value: "done" },
  { label: "انجام نشده", value: "undone" },
];

export const StatusFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("status") || "all";

  const handleFilterClick = (value) => {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  };

  return (
    <ul className="flex text-sm justify-center divide-x divide-neutral-300 mb-5">
      {filterOptions.map((option) => (
        <li
          key={option.value}
          onClick={() => handleFilterClick(option.value)}
          className={`px-5 cursor-pointer transition-colors ${
            currentFilter === option.value
              ? "text-neutral-600 font-bold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};
