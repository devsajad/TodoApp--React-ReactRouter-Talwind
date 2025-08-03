import { Link } from "react-router-dom";
import { Home } from "lucide-react";
export const NotFoundComp = () => {
  return (
    <div className="flex pt-40 w-full flex-col items-center justify-center overflow-hidden p-4 text-center dark:bg-neutral-900">
      <div className="max-w-md">
        <h1 className="bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-neutral-700 dark:text-neutral-200 md:text-3xl">
          صفحه موردنظر پیدا نشد
        </p>
        <p className="mt-2">
          به نظر میاد صفحه‌ای که دنبالشی وجود نداره یا پاک شده !
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900"
        >
          <Home className="h-5 w-5" />
          <span>بازگشت به خانه</span>
        </Link>
      </div>
    </div>
  );
};
