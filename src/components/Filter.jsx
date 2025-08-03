import { useOutletContext } from "react-router-dom";
import { CategoriesFilter } from "./CategoriesFilter";
import { StatusFilter } from "./StatusFilter";
import Spinner from "./ui/Spinner";

export const Filter = () => {
  const { isCatLoading } = useOutletContext();

  if (isCatLoading)
    return (
      <div className="md:w-1/2 w-full pt-15">
        <Spinner size={"mini"} />
      </div>
    );

  return (
    <div className="md:w-1/2 w-full">
      <StatusFilter />
      <CategoriesFilter />
    </div>
  );
};
