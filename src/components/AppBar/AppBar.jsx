import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="flex flex-col justify-between p-4 items-center bg-red-400  sm:flex-row">
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
