import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "./routes";

const AdminProtectedRoute = ({ element }) => {
  const isAdmin = useSelector((state) => state.authStore.userInfo.isAdmin);
  console.log(isAdmin);

  if (isAdmin) {
    return element;
  } else {
    return <Navigate to={ROUTES.STATICHOME} replace />;
  }
};
export default AdminProtectedRoute;
