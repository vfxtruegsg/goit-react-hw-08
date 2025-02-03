import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));

    actions.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-center font-bold text-xl">Login</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="rounded-3xl bg-white flex flex-col shadow-xl gap-4 p-6 w-full max-w-sm">
          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              className="p-2.5 border-1-black outline-none shadow-md rounded-md hover:shadow-xl focus:shadow-xl"
              name="email"
              type="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              className="p-2.5 border-1-black outline-none shadow-md rounded-md hover:shadow-xl focus:shadow-xl"
              name="password"
              type="password"
            />
          </label>
          <button
            className="cursor-pointer btn btn-error rounded-xl"
            type="submit"
          >
            Login
          </button>
          <p className="text-xs">
            Don`t have an account yet?{" "}
            <Link
              className="text-red-500 hover:text-red-700 transition-all duration-200"
              to="/register"
            >
              Create account
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
