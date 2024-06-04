import { TfiFacebook } from "react-icons/tfi";
import UseAuth from "../Hooks/UseAuth";




const FbSignIn = () => {
   const {fbLogin}=UseAuth();

   const handleFbSignIn = () => {
    fbLogin().then((data) => {
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
        <button onClick={handleFbSignIn} className="btn w-full">
        <div className="flex items-center gap-2">
          <TfiFacebook  size={24} />
          <p>Google</p>
        </div>
      </button>
    );
};

export default FbSignIn;