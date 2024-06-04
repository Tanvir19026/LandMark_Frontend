import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = UseAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://land-mark-lh54.vercel.app/userlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserInfo(data));
       
    }
  }, [user]);

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto lg:max-w-xl bg-white text-2xl rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-shrink-0">
              {user?.photoURL ? (
                <img
                  className="h-24 w-24 lg:h-32 lg:w-32 rounded-full"
                  src={user.photoURL}
                  alt="Profile"
                />
              ) : (
                <div className="h-24 w-24 lg:h-32 lg:w-32 flex items-center justify-center bg-gray-300 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-12 w-12 lg:h-16 lg:w-16 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Hello, <span className="text-red-500">{user?.displayName}</span>!
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 1.38-.56 2.63-1.46 3.54A5 5 0 117 3v1m5 7V3a5 5 0 015 5h-1m-1 7h1m-1 1v1m1-6a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Name"
                value={userInfo?.name || ""}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V3H8v8m8 0a8 8 0 110 16 8 8 0 010-16z"
                />
              </svg>
              <input
                type="email"
                placeholder="Email"
                value={userInfo?.email || ""}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h4l1.38-2.28a4.5 4.5 0 017.24 0L17 10h4a2 2 0 012 2v6a2 2 0 01-2 2h-4v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3a2 2 0 01-2-2v-6a2 2 0 012-2z"
                />
              </svg>
              <input
                type="tel"
                placeholder="Phone Number"
                value={userInfo?.mobileNumber || ""}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12c2.28 0 4-1.72 4-4a4 4 0 00-8 0c0 2.28 1.72 4 4 4z"
                />
              </svg>
              <input
                type="number"
                placeholder="Age"
                value={userInfo?.age || ""}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 1.38-.56 2.63-1.46 3.54A5 5 0 117 3v1m5 7V3a5 5 0 015 5h-1m-1 7h1m-1 1v1m1-6a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Gender"
                value={userInfo?.gender || ""}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
          </div>

          <div className="mt-6 text-center">
           <Link to={`/dashboard/profile/edit/${userInfo?._id}`}>
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Edit Profile
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
