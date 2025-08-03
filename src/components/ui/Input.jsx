import { cn } from "../../lib/utils";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "block w-full rounded-md bg-neutral-50 px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-600 sm:text-sm/6",
        className
      )}
      {...props}
    />
  );
};
