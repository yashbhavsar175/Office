import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const [auth, setAuth] = useState(null); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('http://localhost:3000/smoothies', { credentials: 'include' });
                
                if (res.ok) {
                    setAuth(true); 
                } else {
                    setAuth(false); 
                }
            } catch (err) {
                setAuth(false); 
            }
        };

        checkAuth();
    }, []);

    if (auth === null) return <h3>Loading...</h3>; 

    if (!auth) return <Navigate to="/login" />; 

    return children;
};

export default ProtectedRoute;
