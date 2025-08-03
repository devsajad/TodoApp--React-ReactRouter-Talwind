import { AddButton } from "../features/todos/AddButton";
import { TodoList } from "../features/todos/TodoList";
import { Filter } from "../features/categories/Filter";

export const Home = () => {
  return (
    <>
      <Filter />
      <TodoList />
      <AddButton />
    </>
  );
};
