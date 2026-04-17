import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user,loading);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user?.email){
        
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
    // if -> user thake return children
    // else navigate ->Login
};

export default PrivateRoute;