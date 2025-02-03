import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className="flex items-center gap-8">
      <NavLink
        className="text-white p-3 hover:scale-125 duration-300 ease-in-out"
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="text-white p-3 hover:scale-125 duration-300 ease-in-out"
        to="/register"
      >
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
