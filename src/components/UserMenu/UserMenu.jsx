import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="flex items-center gap-8">
      {isLoggedIn && <h2 className="text-white">Welcome, {username.name}</h2>}
      <button
        onClick={() => dispatch(logoutThunk())}
        className="text-white cursor-pointer p-3 hover:scale-125 duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
