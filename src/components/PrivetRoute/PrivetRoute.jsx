import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
    // state 
    const { user, loading } = useContext(AuthContext)

    // loading
    if (loading) {
        return <div className="flex justify-center"><progress className="progress w-56"></progress></div>
    }

    // user 
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;