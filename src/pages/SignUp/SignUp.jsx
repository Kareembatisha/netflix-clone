import "./SignUp.css";
function SignUp() {
  const register = (e) => {
    e.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SignUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUp_gray">New to Netflix? </span>
          <span className="signUp_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
