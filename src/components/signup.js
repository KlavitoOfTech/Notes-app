import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../notes-logo.jpg"; // Your logo path
import "../styles/signup.css";
import signuplogo from "../notes-signup-logo.png"; // Your logo path
import signuplogo2 from "../notes-signup-logo-2.png"; // Your logo path

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Signup and Login
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
      navigate("/dashboard"); // Redirect after signup/login
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-In successful!");
      navigate("/dashboard"); // Redirect after Google login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <div className="left-section">
          <img src={logo} alt="App Logo" className="logo" />
          <h2>Welcome to Uniquenote!</h2>
          <p>Sign up and start taking notes.</p>
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="signup-btn" onClick={handleAuth}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
          <button className="google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
          <p onClick={() => setIsSignUp(!isSignUp)} className="toggle-auth">
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
          <p className="terms-text">
            By creating an account, you agree to our <a href="#">Terms of Service</a> 
            and acknowledge receipt of our <a href="#">Privacy Policy</a>.
          </p>
        </div>
        <div className="right-section">
        <img src={signuplogo2} alt="App Logo" className="signup-logo" />
          <div className="text-content">
            <h3>Work. School. Life.</h3>
            <p>Remember everything</p>
          </div>  
          <img src={signuplogo} alt="App Logo" className="signup-logo" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
