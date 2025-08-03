import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

import { EditTask } from "./pages/EditTask";
import { AddTask } from "./pages/AddTask";
import { AppLayout } from "./components/AppLayout";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { SignupForm } from "./features/auth/SignupForm";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddTask />,
      },
      {
        path: "edit/:id",
        element: <EditTask />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
