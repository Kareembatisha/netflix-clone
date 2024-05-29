// @ts-ignore
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
import "./Login.css";
function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_background">
        <img
          className="login_logo"
          src="src\assets\580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
