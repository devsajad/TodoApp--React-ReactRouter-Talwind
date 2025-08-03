import { useEffect } from "react";
import { useState } from "react";
import {
  addTodo,
  deleteTodo,
  editTodo,
  readTodos,
  toggleTodo,
} from "../services/apiTodos";
import { toast } from "react-toastify";

export const useApiTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isShowModalAdd, setShowModalAdd] = useState(false);
  const [isShowModalEdit, setShowModalEdit] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null);

  useEffect(() => {
    (async function fetchTodos() {
      try {
        setIsLoading(true);
        setError("");

        const data = await readTodos();
        console.log(data);

        setTodoList(data);
      } catch (error) {
        console.error(error.message);
        setError("لطفا اتصال اینترنت خودت رو بررسی و دوباره امتحان کن");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // Todo handler
  async function handleAddTask(title, selectedCat) {
    try {
      setIsLoading(true);

      const todo = await addTodo(title, selectedCat);
      setTodoList((list) => [...list, todo]);

      toast.success("تسک شما با موفقیت ایجاد شد !");
    } catch (error) {
      console.error(error.message);
      toast.error("تسک شما ساخته نشد ، لطفا دوباره امتحان کن");
    } finally {
      handleAddModalToggle();
      setIsLoading(false);
    }
  }

  async function handleRemoveTask(id) {
    try {
      setIsLoading(true);

      await deleteTodo(id);
      setTodoList((list) => list.filter((el) => el.id !== id));

      toast.success("تسک شما با موفقیت حذف شد !");
    } catch (error) {
      console.error(error.message);
      toast.error("تسک حذف نشد ، لطفا دوباره امتحان کن");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClickCheck(id) {
    const item = todoList.find((item) => item.id === id);
    if (!item) return;

    const togglePromise = toggleTodo(id, !item.completed);

    toast.promise(togglePromise, {
      pending: "در حال تغییر وضعیت تسک...",
      success: item.completed
        ? "این تسک به انجام نشده تغییر کرد"
        : "تبریک ! این تسک انجام شده ✨",
      error: "تسک شما تغییر نکرد ! لطفا دوباره امتحان کن",
    });

    try {
      const updatedTodo = await togglePromise;

      setTodoList((items) =>
        items.map((item) => (item.id === id ? updatedTodo : item))
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  // Modal Handlers
  function handleAddModalToggle() {
    setShowModalAdd((s) => !s);
  }

  function handleEditModalToggle(id) {
    setActiveItemId(id);
    setShowModalEdit((s) => !s);
  }

  async function handleEditTask(id, title, selectedCat) {
    try {
      setIsLoading(true);

      const updatedTodo = await editTodo(id, title, selectedCat);

      setTodoList((items) =>
        items.map((item) => (item.id === id ? updatedTodo : item))
      );

      toast.success("تسک با موفقیت ویرایش شد ");
    } catch (error) {
      console.error(error.message);
      toast.error("تسک ویرایش نشد ، لطفا دوباره امتحان کن");
    } finally {
      handleEditModalToggle();
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    todoList,
    handleAddTask,
    isShowModalAdd,
    handleAddModalToggle,
    handleRemoveTask,
    handleEditTask,
    isShowModalEdit,
    handleEditModalToggle,
    handleClickCheck,
  };
};
