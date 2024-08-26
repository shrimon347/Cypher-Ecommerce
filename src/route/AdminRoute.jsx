/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center mt-[10%]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default AdminRoute;
