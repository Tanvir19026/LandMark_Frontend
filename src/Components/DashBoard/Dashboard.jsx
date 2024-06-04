import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import Profile from "./Profile";

const Dashboard = () => {
  const {logout}=useAuth();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const handleLogout =async()=>{
      await logout();
  }
  return (
    <div className={`drawer ${isDrawerOpen ? "drawer-open" : ""} drawer-mobile lg:drawer-open   bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF]`}>
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="drawer-content flex flex-col">
        {location.pathname === "/dashboard" && 
        <Profile></Profile>
        }
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden self-end m-4">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsDrawerOpen(false)}
        ></label>
        <ul className="  bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] menu p-4 w-80 bg-base-200 text-base-content flex flex-col justify-between h-full">
          {/* Sidebar content here */}
          <div>
          <Link to="/dashboard" onClick={handleLinkClick}>
              <li className="mx-auto rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-blue-600 text-xl font-bold hover:bg-black hover:text-white mb-5 h-[50px]">
                DashBoard
              </li>
            </Link>
            <Link to="/dashboard/addproducts" onClick={handleLinkClick}>
              <li className="mt-5 items-center h-[50px] rounded-lg p-2 border-4 border-gray-600 justify-center text-blue-600 text-xl font-bold hover:bg-black hover:text-white mb-5">
                Add Properties
              </li>
            </Link>
            <Link to={"/dashboard/management"} onClick={handleLinkClick}>
              <li className="mx-auto rounded-lg p-2 border-4 border-gray-600 justify-center items-center text-blue-600 text-xl font-bold hover:bg-black hover:text-white mb-5 h-[50px]">
                 Management
              </li>
            </Link>
          
          </div>
          <div className="flex space-x-4 p-4 text-xl">
            <Link to="/" className="w-full" onClick={handleLinkClick}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Home
              </button>
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
