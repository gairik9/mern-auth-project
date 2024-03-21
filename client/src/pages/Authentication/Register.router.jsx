import "./Authentication.styles.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="register">
      <div className="register__container">
        <h1>Register</h1>
        <form className="register__form">
          <input type="text" placeholder="Email ID..." />
          <input type="password" placeholder="Password..." />
          <button>SignUp</button>
        </form>
        <div className="register__alreadyMember">
          <p>
            Already have an account?
            <Link to="/sign-in">
              <span>SignIn</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
