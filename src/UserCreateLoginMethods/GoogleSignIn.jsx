import { FcGoogle } from "react-icons/fc";
import UseAuth from "../Hooks/UseAuth";




const GoogleLogin = () => {
   const {googleLogin}=UseAuth();

  
   const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

    return (
        <button onClick={handleGoogleSignIn} className="btn w-full">
        <div className="flex items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </button>
    );
};

export default GoogleLogin;