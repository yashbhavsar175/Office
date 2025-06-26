import { useState, useRef } from "react";
import Footer from "./footer";
import Nav from "./nav";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ 
    //   Email : email,
    //   Password : password
    // });
    try {
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      }
      )
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        if (emailErrorRef.current) {
          emailErrorRef.current.textContent = data.errors.email || "";
        }
        if (passwordErrorRef.current) {
          passwordErrorRef.current.textContent = data.errors.password || "";
        }
      }
      if(data.user){
        location.assign('/')
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="email error" ref={emailErrorRef}></div>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password error" ref={passwordErrorRef}></div>

        <button type="submit">Sign up</button>
      </form>
      <Footer />
    </div>
  );
};

export default Signup;
