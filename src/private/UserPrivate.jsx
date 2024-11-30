import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContex } from "../Context/AuthProvider";
import { CirclesWithBar } from "react-loader-spinner";

const UserPrivate = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={pathname}></Navigate>
    </div>
  );
};

export default UserPrivate;
