import { Link } from "react-router-dom";

export const AddButton = () => {
  return (
    <Link
      to={"add"}
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10"
    >
      <button className="text-white w-12 h-12 text-4xl font-extralight rounded-md bg-neutral-700  cursor-pointer">
        +
      </button>
    </Link>
  );
};
