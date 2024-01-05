import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //const { user } = UserAuth();
    const [isData, setIsData] = useState(false)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            setIsData(true)
        }
    })

    if (isData) {
        return <Navigate to='/' />
    } else {
        return children
    }
}



export default PrivateRoute;