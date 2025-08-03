import { Pencil } from "lucide-react";
import { X } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { Badge } from "./ui/Badge";

export const TodoItem = ({ children, item }) => {
  const { handleClickCheck, handleRemoveTask } = useOutletContext();

  return (
    <li className="group flex items-center justify-between border-b-1 border-neutral-200 dark:border-neutral-800">
      <label className="p-4 cursor-pointer w-full">
        <div className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            className="list-checkbox peer"
            checked={item.completed}
            onChange={() => handleClickCheck(item.id)}
          />
          <span className="text-neutral-950 peer-checked:text-neutral-400 peer-checked:dark:text-neutral-600 duration-300 dark:text-gray-50">
            {children}
          </span>
        </div>
        <div className="mr-8 ">
          <Badge color={item?.category?.color}>{item?.category?.name}</Badge>
        </div>
      </label>

      <div className="flex items-center invisible opacity-0 scale-90 group-hover:visible group-hover:scale-100 group-hover:opacity-100 transition-all duraoin-500 gap-2">
        {!item.completed && (
          <Link to={`edit/${item.id}`}>
            <button className=" rounded-md p-[5px] bg-neutral-200 text-neutral-600">
              <Pencil className="size-5" />
            </button>
          </Link>
        )}

        <button
          className="bg-rose-200 rounded-md text-rose-400 p-[3px]"
          onClick={() => handleRemoveTask(item.id)}
        >
          <X />
        </button>
      </div>
    </li>
  );
};
