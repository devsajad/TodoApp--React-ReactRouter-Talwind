import { CategoriesFilter } from "./CategoriesFilter";
import { StatusFilter } from "./StatusFilter";
import Spinner from "../../components/ui/Spinner";
import { useSelector } from "react-redux";

export const Filter = () => {
  const { status } = useSelector((state) => state.categories);

  if (status === "loading")
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
