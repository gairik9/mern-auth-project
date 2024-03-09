import "./Navbar.styles.css";
import { Logo } from "../../assets/images";

const Navbar = () => {
  const user = false;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          {user ? (
            <>
              <li>Home</li>
              <li>About</li>
              <li>Profile</li>
            </>
          ) : (
            <>
              <li>Home</li>
              <li>SignIn</li>
              <li>SignUp</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
