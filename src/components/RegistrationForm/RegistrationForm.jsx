import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-center font-bold text-xl ">Register</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="rounded-3xl bg-white flex flex-col shadow-xl gap-4 p-6 w-full max-w-sm">
          <label className="flex flex-col gap-2">
            <span>Name:</span>
            <Field
              className="p-2.5 border-1-black outline-none shadow-md rounded-md hover:shadow-xl focus:shadow-xl"
              name="name"
              type="text"
            />
          </label>
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
            className="cursor-pointer btn btn-secondary rounded-xl"
            type="submit"
          >
            Register
          </button>
          <p className="text-xs">
            Already have an account?{" "}
            <Link
              className="text-pink-500 hover:text-pink-700 transition-all duration-200"
              to="/login"
            >
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
