import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import ThemeProvider from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
