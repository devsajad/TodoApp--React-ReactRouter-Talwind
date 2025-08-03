import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import { toast } from "react-toastify";

export const useLocalTodo = () => {
  const [todoList, setTodoList] = useLocalStorageState([], "todoList");
  const [isShowModalAdd, setShowModalAdd] = useState(false);
  const [isShowModalEdit, setShowModalEdit] = useState(false);

  function handleAddModalToggle() {
    setShowModalAdd((s) => !s);
  }

  function handleEditModalToggle(id) {
    setShowModalEdit((s) => !s);
  }

  function handleAddTask(title) {
    setTodoList((todoList) => [
      ...todoList,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    handleAddModalToggle();
    toast.success("تسک با موفقیت ایجاد شد ");
  }

  function handleClickCheck(id) {
    setTodoList((list) =>
      list.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  }

  function handleRemoveTask(id) {
    setTodoList((list) => list.filter((el) => el.id !== id));
    toast.success("تسک با موفقیت حذف شد ");
  }

  function handleEditTask(id, title) {
    setTodoList((items) =>
      items.map((item) => (item.id === id ? { ...item, title: title } : item))
    );
    handleEditModalToggle();
    toast.success("تسک با موفقیت ویرایش شد ");
  }

  return {
    todoList,
    isShowModalAdd,
    isShowModalEdit,
    handleAddModalToggle,
    handleEditModalToggle,
    handleAddTask,
    handleClickCheck,
    handleRemoveTask,
    handleEditTask,
  };
};
