import React from 'react';

const App = () => {
  const googleLogin = () => window.open('http://localhost:5000/auth/google', "_self");
const linkedinLogin = () => {
  const clientId = '78cqoxt3bg3ntj';
  const redirectUri = 'http://localhost:5000/auth/linkedin/callback';
  const scope = 'openid profile email';
  const state = 'randomString123'; 

  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${state}`;

  window.location.href = authUrl;
};
  return (
    <div>
      <h1>OAuth Login</h1>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={linkedinLogin}>Login with LinkedIn</button>
    </div>
  );
};

export default App;
