import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="flex justify-between p-4 items-center bg-red-500 mb-12">
      <Navigation />

      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </div>
  );
};

export default AppBar;
