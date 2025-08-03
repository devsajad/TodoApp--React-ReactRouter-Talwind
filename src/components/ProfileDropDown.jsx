import { LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

export const ProfileDropDown = ({ user, logout }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="relative transition-all" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center border-1 border-neutral-300 text-neutral-800 dark:text-neutral-200 dark:border-neutral-600 font-bold size-10 rounded-full bg-neutral-100 dark:bg-neutral-700"
      >
        {user?.name?.[0].toUpperCase()}
      </button>

      <div
        className={`bg-neutral-50/70 backdrop-blur-lg border-1 border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700
                   absolute rounded-xl mt-2 w-60 left-0 origin-top-right
                   transition-all duration-200 ease-in-out
                   ${
                     isOpen
                       ? "visible opacity-100 scale-100"
                       : "invisible opacity-0 scale-95"
                   }`}
      >
        <ul className="rounded-xl flex flex-col items-center text-center p-2">
          <li className="font-bold text-sm border-b border-neutral-200 dark:border-neutral-700 w-full pb-3 mb-2 px-2">
            <p className="text-neutral-800 dark:text-neutral-100">
              {user?.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
              {user?.email}
            </p>
          </li>
          <li className="w-full">
            <button className="duration-300 text-sm w-full p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700">
              پنل کاربری
            </button>
          </li>
          <li className="w-full">
            <button
              className="duration-300 text-sm flex gap-2 items-center justify-center w-full p-2 rounded-lg text-red-800 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50"
              onClick={handleLogout}
            >
              <LogOut className="size-4" />
              خروج از حساب
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
