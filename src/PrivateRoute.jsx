/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Element, ...rest }) {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
}
export default PrivateRoute;
