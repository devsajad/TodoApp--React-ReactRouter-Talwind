import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { getCategories } from "../features/categories/categoriesSlice";
import { initializeTodos } from "../features/todos/todosSlice";

export const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(initializeTodos());
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
