import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ProfileDropDown } from "../features/auth/ProfileDropDown";
import { StorageModeToggle } from "../features/storage/StorageModeToggle";

export const Header = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <header className="mb-8 flex items-center  justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-neutral-50">
          امروز
        </h1>
        <p className="text-lg text-gray-400 dark:text-neutral-200">
          {new Date().toLocaleDateString("fa-IR", {
            day: "numeric",
            month: "short",
          })}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <StorageModeToggle />
        <button className="p-3" onClick={toggleThemeMode}>
          {themeMode === "dark" ? (
            <MoonStar className="text-neutral-700 dark:text-neutral-300" />
          ) : (
            <Sun className="text-neutral-700 dark:text-neutral-100" />
          )}
        </button>

        <ProfileDropDown />
      </div>
    </header>
  );
};
