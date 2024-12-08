import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    if(loading){
        // return <span className="loading loading-ring loading-lg absolute left-1/2 -translate-x-1/2 top-14"></span>
        return <span className="loading loading-dots loading-lg  absolute left-1/2 -translate-x-1/2 top-14"></span>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;