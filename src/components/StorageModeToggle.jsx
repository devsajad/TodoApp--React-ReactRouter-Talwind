import { Server } from "lucide-react";
import { Database } from "lucide-react";
import { toast } from "react-toastify";

export const StorageModeToggle = ({ storageMode, setStorageMode }) => {
  function handleClickStorage() {
    storageMode === "api" ? setStorageMode("local") : setStorageMode("api");
    toast.info(
      storageMode === "api"
        ? "فضای ذخیره‌سازی به لوکال تغییر کرد"
        : "فضای ذخیره‌سازی به ریموت تغییر کرد"
    );
  }

  return (
    <button className="p-3" onClick={handleClickStorage}>
      {storageMode === "api" ? (
        <Server className="text-neutral-700 dark:text-neutral-100 w-5 h-5" />
      ) : (
        <Database className="text-neutral-700 dark:text-neutral-100 w-5 h-5" />
      )}
    </button>
  );
};
