import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { FormRow } from "../../components/ui/FormRow";
import { Input } from "../../components/ui/Input";
import { login } from "./authSlice";

export const LoginForm = () => {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    dispatch(login({ email, password }))
      .unwrap()
      .then((payload) => {
        const userName = payload.user?.user_metadata?.name || "کاربر";
        toast(`${userName} عزیز ، خیلی خوش‌اومدی`, {
          position: "top-center",
          hideProgressBar: false,
          transition: Flip,
        });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-6 pb-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-neutral-900">
          ورود به اپلیکیشن
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md border-1 rounded-xl border-neutral-200 px-10 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormRow label="آدرس ایمیل" htmlFor="email">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </FormRow>

          <FormRow label="رمز ورود" htmlFor="password">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </FormRow>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-neutral-700 px-3 py-1.5 text-sm/6 font-semibold text-neutral-50 shadow-xs hover:bg-neutral-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              ورود
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-neutral-500 space-x-1">
          <span>حساب‌کاربری ندارید ؟</span>
          <Link
            to="/signup"
            className="font-semibold text-neutral-600 hover:text-neutral-500"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
};
