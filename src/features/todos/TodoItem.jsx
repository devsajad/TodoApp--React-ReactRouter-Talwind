import { Pencil, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Badge } from "../../components/ui/Badge";
import { removeTodo, toggleTodoStatus } from "./todosSlice";

export const TodoItem = ({ children, item }) => {
  const dispatch = useDispatch();

  function handleClickToggle() {
    dispatch(toggleTodoStatus({ id: item.id, completed: item.completed }))
      .unwrap()
      .then(() => {
        const message = item.completed
          ? "تسک به عنوان کامل نشده علامت زده شد"
          : "تسک کامل شد 🎉";
        toast.success(message);
      })
      .catch((err) => toast.error("تسک علامت زده نشد ، لطفا دوباره امتحان کن"));
  }

  function handleRemoveTask() {
    dispatch(removeTodo(item.id))
      .unwrap()
      .then(() => {
        toast.success("تسک با موفقیت حذف شد !");
      })
      .catch((err) => toast.error("تسک حذف نشد ، لطفا دوباره امتحان کن"));
  }

  return (
    <li className="group flex items-center justify-between border-b-1 border-neutral-200 dark:border-neutral-800">
      <label className="p-4 cursor-pointer w-full">
        <div className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            className="list-checkbox peer"
            checked={item.completed}
            onChange={handleClickToggle}
          />
          <span className="text-neutral-950 peer-checked:text-neutral-400 peer-checked:dark:text-neutral-600 duration-300 dark:text-gray-50">
            {children}
          </span>
        </div>
        <div className="mr-8 ">
          {item.category && (
            <Badge color={item.category.color}>{item.category.name}</Badge>
          )}
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
          onClick={handleRemoveTask}
        >
          <X />
        </button>
      </div>
    </li>
  );
};
