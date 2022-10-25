import { Spinner } from 'flowbite-react';
import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

/* 
1. Only allow authenticated user to visit the route
2.
3. Redirect user to the route they wanted to go before login
*/


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center grid grid-cols-1 place-items-center h-56">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;