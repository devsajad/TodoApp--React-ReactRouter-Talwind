import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { filterTodo } from "../../lib/utils";
import { TodoItem } from "./TodoItem";
import ListSkeleton from "../../components/ui/ListSkeleton";
import Error from "../../components/ui/Error";

export const TodoList = () => {
  const { todoList, status, error } = useSelector((state) => state.todos);

  const [searchParams] = useSearchParams();

  const activeCategory = Number(searchParams.get("category"));
  const activeStatus = searchParams.get("status") || "all";

  const filteredTodos = useMemo(
    () => filterTodo(todoList, activeCategory, activeStatus),
    [todoList, activeCategory, activeStatus]
  );

  if (status === "loading") {
    return <ListSkeleton />;
  }

  if (status === "error") {
    return <Error>{error}</Error>;
  }

  if (filteredTodos.length === 0) {
    return (
      <p className="text-l md:text-xl font-bold border-1 p-8 rounded-lg border-neutral-100 dark:text-neutral-200 md:w-1/2 w-full">
        تسک جدیدی نیست ! وظایف رو اضافه کن
      </p>
    );
  }

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
