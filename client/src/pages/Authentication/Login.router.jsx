import "./Authentication.styles.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form className="login__form">
          <input type="text" placeholder="Email ID..." />
          <input type="password" placeholder="Password..." />
          <button>SignIn</button>
        </form>
        <div className="login__notMember">
          <p>
            Already have an account?
            <Link to="/sign-up">
              <span>SignUp</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
