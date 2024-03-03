import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const token1 = localStorage.getItem("token");

  if (token1) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
