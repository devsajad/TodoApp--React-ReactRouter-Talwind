import { useOutletContext } from "react-router-dom";
import { CatButton } from "./CatButton";

export const CategoriesFilter = () => {
  const { catError, catsData } = useOutletContext();

  if (!catsData) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      {catsData.map((cat) => (
        <CatButton
          key={cat.id}
          id={cat.id}
          iconName={cat.iconName}
          text={cat.name}
          color={cat.color}
        />
      ))}
    </div>
  );
};
