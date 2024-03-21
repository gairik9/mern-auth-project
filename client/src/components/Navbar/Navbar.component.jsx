import "./Navbar.styles.css";
import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-right">
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sign-in">SignIn</Link>
                </li>
                <li>
                  <Link to="/sign-up">SignUp</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
