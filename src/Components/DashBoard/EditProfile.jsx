import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function EditProfile() {
  const data = useLoaderData();
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;
    const gender=form.gender.value;
    const userData = {
      name,
      age,
      mobileNumber,
      gender
      // email: data?.email, // Email is immutable in this case
    };

    fetch(`https://land-mark-server.vercel.app/userlist/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then(() => {
        return setShowToast(true);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl mb-7 text-center">Edit Profile</h1>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-white text-2xl">Profile Updated successfully!</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="text-2xl max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-gray-700">User Name</label>
          <div className="flex items-center border border-gray-300 rounded-lg bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.38-.56 2.63-1.46 3.54A5 5 0 117 3v1m5 7V3a5 5 0 015 5h-1m-1 7h1m-1 1v1m1-6a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <input
              type="text"
              name="name"
              defaultValue={data?.name}
              className="flex-1 py-2 px-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-gray-700">User Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V3H8v8m8 0a8 8 0 110 16 8 8 0 010-16z" />
            </svg>
            <input
              type="text"
              value={data?.email}
              disabled
              name="email"
              className="flex-1 py-2 px-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="mb-2 text-gray-700">User Age</label>
          <div className="flex items-center border border-gray-300 rounded-lg bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.38-.56 2.63-1.46 3.54A5 5 0 117 3v1m5 7V3a5 5 0 015 5h-1m-1 7h1m-1 1v1m1-6a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <input
              type="text"
              name="age"
              defaultValue={data?.age}
              className="flex-1 py-2 px-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobileNumber" className="mb-2 text-gray-700">User Mobile</label>
          <div className="flex items-center border border-gray-300 rounded-lg bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l1.38-2.28a4.5 4.5 0 017.24 0L17 10h4a2 2 0 012 2v6a2 2 0 01-2 2h-4v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3a2 2 0 01-2-2v-6a2 2 0 012-2z" />
            </svg>
            <input
              type="text"
              name="mobileNumber"
              defaultValue={data?.mobileNumber}
              className="flex-1 py-2 px-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Gender" className="mb-2 text-gray-700">Gender</label>
          <div className="flex items-center border border-gray-300 rounded-lg bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-400 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l1.38-2.28a4.5 4.5 0 017.24 0L17 10h4a2 2 0 012 2v6a2 2 0 01-2 2h-4v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3a2 2 0 01-2-2v-6a2 2 0 012-2z" />
            </svg>
            <input
              type="text"
              name="gender"
              defaultValue={data?.gender}
              className="flex-1 py-2 px-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Update Profile"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
}
