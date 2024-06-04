import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginImage from '../assets/undraw_secure_login_pdn4.svg'
import FbSignIn from "./FbSignIn";
import UseAuth from "../Hooks/UseAuth";
import GoogleLogin from "./GoogleSignIn";

const Login = () => {
  const { signIn, user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    try {
      await signIn(email, password);
    } catch (error) {
      setErrorMessage("Incorrect email or password!!!!");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-6">
            Login to your account to continue where you left off.
          </p>
          <img src={loginImage} alt="Login" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered text-lg"
              name="email"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-lg"
              name="password"
              required
            />
          </div>
          {errorMessage && (
            <div role="alert" className="alert alert-warning mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}
          <div className="form-control mb-6">
            <input
              className="btn bg-red-500 text-white text-lg"
              type="submit"
              value="Login"
            />
          </div>
          <div className="mb-6">
            <GoogleLogin />
          </div>
          <div className="mb-6">
            <FbSignIn />
          </div>
          <div className="text-center">
            <p className="text-lg">
              New here?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
