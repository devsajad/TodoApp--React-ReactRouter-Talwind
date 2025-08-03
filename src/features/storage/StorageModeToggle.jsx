import { Database, Server } from "lucide-react";
import { toast } from "react-toastify";
import { toggleStorageMode } from "./storageSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Cloud } from "lucide-react";
import { initializeTodos } from "../todos/todosSlice";

export const StorageModeToggle = () => {
  const { mode } = useSelector((state) => state.storage);
  const dispatch = useDispatch();

  function handleClickStorage() {
    dispatch(toggleStorageMode());
    dispatch(initializeTodos());
    toast.info(
      `${
        mode === "api"
          ? "فضای ذخیره‌سازی به لوکال تغییر کرد"
          : "فضای ذخیره‌سازی به ریموت تغییر کرد"
      }`
    );
  }

  return (
    <button className="p-3" onClick={handleClickStorage}>
      {mode === "api" ? (
        <Database className="text-neutral-700 dark:text-neutral-100 w-5 h-5" />
      ) : (
        <Cloud className="text-neutral-700 dark:text-neutral-100 w-5 h-5" />
      )}
    </button>
  );
};
