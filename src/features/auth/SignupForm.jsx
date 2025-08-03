import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormRow } from "../../components/ui/FormRow";
import { Input } from "../../components/ui/Input";
import Spinner from "../../components/ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./authSlice";
import { Flip } from "react-toastify";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) return;

    dispatch(signup({ name, email, password }))
      .unwrap()
      .then(() => {
        toast(`${name} عزیز ، خیلی خوش‌اومدی`, {
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
          ثبت‌نام در سایت
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md border-1 rounded-xl border-neutral-200 px-10 py-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormRow label="نام شما" htmlFor="name">
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
          </FormRow>

          <FormRow label="آدرس ایمیل" htmlFor="email">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </FormRow>

          <FormRow label="رمز ورود" htmlFor="password">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              disabled={isLoading}
              required
            />
          </FormRow>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-neutral-700 px-3 py-1.5 text-sm/6 font-semibold text-neutral-50 shadow-xs hover:bg-neutral-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? <Spinner size="mini" /> : "ایجاد حساب"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-neutral-500">
          <span> حساب‌کاربری دارید ؟ </span>
          <Link
            to="/login"
            className="font-semibold text-neutral-600 hover:text-neutral-500"
          >
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
};
