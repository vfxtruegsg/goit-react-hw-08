import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn && (
        <nav className="flex items-center justify-between">
          <NavLink
            className="text-white p-3 hover:scale-125 duration-300 ease-in-out"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-white p-3 hover:scale-125 duration-300 ease-in-out"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
