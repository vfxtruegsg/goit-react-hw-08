import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { Navigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logoutThunk());
    <Navigate to="/login" />;
  };

  return (
    <div className="flex flex-col mt-5 items-center justify-between sm:flex-row sm:mt-0">
      {isLoggedIn && (
        <h2 className="text-white text-center p-3">Welcome, {username.name}</h2>
      )}
      <button
        onClick={handleLogout}
        className="text-white cursor-pointer p-3 hover:scale-125 duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
