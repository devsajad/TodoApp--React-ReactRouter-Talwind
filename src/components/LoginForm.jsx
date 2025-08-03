import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLoginClick(e) {
    e.preventDefault();

    if (!email || !password) return;

    const isLogin = login(email, password, name);

    if (isLogin) {
      toast(`${name} عزیز ، خیلی خوش‌اومدی`, {
        position: "top-center",
        transition: Flip,
        autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
      });

      navigate("/", { replace: true });
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-6 pb-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-neutral-900">
          ورود به اپلیکیشن
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md border-1 rounded-xl border-neutral-200 px-10 py-10">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleLoginClick}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-neutral-900"
            >
              نام شما
            </label>
            <div className="mt-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="block w-full rounded-md bg-neutral-50 px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-neutral-900"
            >
              آدرس ایمیل
            </label>
            <div className="mt-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-neutral-50 px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-neutral-900"
              >
                رمز ورود
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-base text-sm text-neutral-600 hover:text-neutral-500"
                >
                  فراموش کرده‌اید ؟
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-neutral-50 px-3 py-1.5 text-base text-neutral-900 outline-1 -outline-offset-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-neutral-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-neutral-700 px-3 py-1.5 text-sm/6 font-semibold text-neutral-50 shadow-xs hover:bg-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
            >
              ورود
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-neutral-500 space-x-1">
          <span>حساب‌کاربری ندارید ؟</span>
          <a
            href="#"
            className="font-semibold text-neutral-600 hover:text-neutral-500"
          >
            ثبت نام
          </a>
        </p>
      </div>
    </div>
  );
};
