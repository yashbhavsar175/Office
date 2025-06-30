import { useEffect, useState } from 'react';

function App() {
    const [user, setUser] = useState(null); 
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get('name');
        const email = params.get('email');
        const photo = params.get('photo');

        if (name && email) {
            setUser({ name, email, photo });
        }
    }, []);

    const loginWithGoogle = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const loginWithLinkedin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1> OAuth Login Demo</h1>

            {user ? (
                <div>
                    <h2>Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photo} alt="profile" style={{ borderRadius: '50%' }} />
                </div>
            ) : (
              <div>
                <button onClick={loginWithLinkedin}>Login with linkedin</button>
                <button onClick={loginWithGoogle}>Login with Google</button>
              </div>
            )}
        </div>
    );
}

export default App;
