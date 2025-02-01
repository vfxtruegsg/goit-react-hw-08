import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-center font-bold text-xl ">Register</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="rounded-3xl bg-white flex flex-col shadow-xl gap-4 p-6 w-1/5">
          <label className="flex flex-col gap-2">
            <span>Name:</span>
            <Field
              className="p-2.5 border-1-black outline-none shadow-md rounded-md hover:shadow-xl focus:shadow-xl"
              name="Name"
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
