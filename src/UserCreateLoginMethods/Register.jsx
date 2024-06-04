import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registrationImage from "../assets/undraw_enter_uhqk.svg"; 
import UseAuth from "../Hooks/UseAuth";
import GoogleLogin from "./GoogleSignIn";
import FbSignIn from "./FbSignIn";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser ,user} = UseAuth();
  const [regMessage, setRegMessage] = useState("");
  const [regType, setRegType] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
      setRegMessage("Passwords do not match!");
      setRegType("error");
      return;
    }

    try {
      await createUser(email, password).then((data)=>{
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
          };
          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      })
    
      setRegMessage("Registration successful!");
      setRegType("success");
      if (user) {
        navigate(from);
      }

      navigate(from, { replace: true });
    } catch (error) {
      setRegMessage("Registration failed!");
      setRegType("error");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Join Us Now!</h1>
          <p className="text-lg mb-6">
            Create an account to enjoy all our features and stay connected.
          </p>
          <img src={registrationImage} alt="Register" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
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
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-lg">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered text-lg"
              name="confirm_password"
              required
            />
          </div>
          {!passMatch && (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          )}
          <div className="form-control mt-6">
            <input
              className="btn bg-red-500 text-white text-lg"
              type="submit"
              value="Register"
            />
          </div>
          <div className="mt-6">
            <GoogleLogin />
          </div>
          <div className="mt-6">
            <FbSignIn />
          </div>
          <div className={`toast ${regType === "success" ? "toast-success" : "toast-error"} mt-4`}>
            {regMessage && (
              <div className="alert">
                <span>{regMessage}</span>
              </div>
            )}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg">
              Already have an account?{" "}
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
