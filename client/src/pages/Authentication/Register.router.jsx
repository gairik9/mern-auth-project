import { useState } from "react";
import "./Authentication.styles.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response;
      console.log(data);
      setLoading(false);

      if (!response.ok || data?.success === false) {
        setError(true);
        return;
      } else {
        setError(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <main className="register">
      <div className="register__container">
        <h1>Register</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            onChange={handleChange}
          />
          <input
            id="email"
            type="email"
            placeholder="Email ID..."
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            placeholder="Password..."
            onChange={handleChange}
          />
          <button disabled={loading} className="disabled:opacity-20">
            {loading ? "Please wait..." : "SignUp"}
          </button>
        </form>
        <div className="register__alreadyMember">
          <p>
            Already have an account?
            <Link to="/sign-in">
              <span>SignIn</span>
            </Link>
          </p>
        </div>
        <div className="register__error">
          <p>{error && "Oops! Something went wrong."}</p>
        </div>
      </div>
    </main>
  );
};

export default Register;
