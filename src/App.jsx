import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
