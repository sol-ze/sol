import { Route, Routes } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";
import UseMemoPage from "../pages/UseMemoPage";
import UseCallbackPage from "../pages/UseCallbackPage";
import LifeCycleHooksPage from "../pages/LifeCycleHooksPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import AboutUs from "../pages/AboutUs";
import ItemPage from "../pages/ItemPage";
import StaticHomePage from "../pages/StaticHomePage";
import HomePage from "../pages/HomePage";
import ReduxPage2 from "../pages/ReduxPage2";
import ReduxPage3 from "../pages/ReduxPage3";
import Profile from "../pages/Profile";
import EditProduct from "../pages/EditProduct";
import ProtectedRoute from "./ProtectedRoute";
import ROUTES from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.STATICHOME} element={<StaticHomePage />} />
      <Route path="/registerpage" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
      <Route path="/usecallbackpage" element={<UseCallbackPage />} />
      <Route path="/usememopage" element={<UseMemoPage />} />
      <Route path="/item/:id" element={<ItemPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/redux2" element={<ReduxPage2 />} />
      <Route path="/redux3" element={<ReduxPage3 />} />
      <Route
        path="/profile"
        element={<ProtectedRoute element={<Profile />} />}
      />

      <Route
        path="/edit/:id"
        element={<ProtectedRoute element={<EditProduct />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
