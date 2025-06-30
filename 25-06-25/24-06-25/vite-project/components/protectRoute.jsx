import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/check-auth', {
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 200) setIsAuth(true);
            else setIsAuth(false);
        })
        .catch(() => setIsAuth(false));
    }, []);

    if (isAuth === null) return <p>Loading...</p>;
    if (!isAuth) return <Navigate to="/login" />;
    return children;
};

export default ProtectedRoute;
