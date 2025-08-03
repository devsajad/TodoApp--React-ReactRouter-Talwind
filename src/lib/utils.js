import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function filterTodo(todoList, category, status) {
  // First, filter by the selected category if one is provided
  const byCategory = category
    ? todoList.filter((todo) => todo?.categoryId === category)
    : todoList;

  // Next, filter the result by the completion status
  switch (status) {
    case "done":
      return byCategory.filter((todo) => todo.completed);
    case "undone":
      // The property is 'completed', not 'complete'
      return byCategory.filter((todo) => !todo.completed);
    default:
      // This handles the 'all' case
      return byCategory;
  }
}
