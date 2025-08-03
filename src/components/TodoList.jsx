import { useOutletContext, useSearchParams } from "react-router-dom";
import { TodoItem } from "./TodoItem";
import { filterTodo } from "../lib/utils";
import { useMemo } from "react";

export const TodoList = () => {
  const { todoList } = useOutletContext();
  const [searchParams] = useSearchParams();

  const activeCategory = Number(searchParams.get("category"));
  const activeStatus = searchParams.get("status") || "all";

  const filteredTodos = useMemo(
    () => filterTodo(todoList, activeCategory, activeStatus),
    [todoList, activeCategory, activeStatus]
  );

  if (filteredTodos.length === 0)
    return (
      <p className="text-l md:text-xl font-bold border-1 p-8 rounded-lg border-neutral-100 dark:text-neutral-200 md:w-1/2 w-full">
        تسک جدیدی نیست ! وظایف رو اضافه کن
      </p>
    );

  return (
    <div className="grow md:w-1/2 w-full">
      <ul className="flex flex-col ">
        {filteredTodos.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem}>
            {todoItem.title}
          </TodoItem>
        ))}
      </ul>
    </div>
  );
};
