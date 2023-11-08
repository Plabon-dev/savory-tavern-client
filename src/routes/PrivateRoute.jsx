import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);
    console.log(location.pathname);
    const { user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname}  to='/login' replace></Navigate>;
};

export default PrivateRoute;