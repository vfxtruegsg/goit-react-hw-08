import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  return (
    isLoggedIn && (
      <div className="flex flex-col mt-5 items-center justify-between sm:flex-row sm:mt-0">
        <h2 className="text-white text-center p-3">Welcome, {username.name}</h2>
        <button
          onClick={handleLogout}
          className="text-white cursor-pointer p-3 hover:scale-125 duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default UserMenu;
