import { CatButton } from "./CatButton";
import { useSelector } from "react-redux";

export const CategoriesFilter = () => {
  const { catsData } = useSelector((state) => state.categories);

  if (!catsData) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      <CatButton
        key={"all"}
        id={"all"}
        iconName={"ListFilter"}
        text={"همه دسته‌ها"}
        color={"amber"}
      />
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
