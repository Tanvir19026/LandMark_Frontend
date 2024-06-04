/* eslint-disable react/jsx-key */
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import logo from '../../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useEffect, useState } from 'react';
import SingleFlat from '../Flats/SingleFlat';


const Navbar = () => {
  const { logout, user } = UseAuth();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState(''); 

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    fetch('https://land-mark-server.vercel.app/flatlist')
      .then(res => res.json())
      .then(data => {
        setFilterData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilter = (value) => {
    setQuery(value); // Update the input query value
    if (value.trim() === '') {
      setData([]); // Reset the data if input is empty
    } else {
      const result = filterData.filter(f => f.title.toLowerCase().includes(value.toLowerCase()));
      setData(result);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-3xl md:text-4xl lg:text-4xl text-orange-500 font-mono">
              <img src={logo} alt="logo" className="h-12" />
            </Link>
          </div>

          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for properties..."
                onChange={e => handleFilter(e.target.value)}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
              Home
            </Link>
            <Link to="/category" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
              Category
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                  Dashboard
                </Link>
              </>
            )}
          </div>

          <Link to="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
            <FaShoppingCart className="text-gray-500 hover:text-gray-700 h-6 w-6" />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                  Login
                </Link>
                <Link to="/register" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium">
                  Register
                </Link>
              </>
            )}
            {user && (
              <div className="relative">
                <Link to="dashboard/profile">
                  <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                    <img className="h-10 w-10 rounded-full" src={user.photoURL || 'https://via.placeholder.com/150'} alt="Profile avatar" />
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User avatar" src={user?.photoURL || 'https://via.placeholder.com/150'} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700">Home</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700">Dashboard</Link>
                  </li>
                )}
                {!user && (
                  <>
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700">Login</Link>
                    </li>
                    <li>
                      <Link to="/register" className="block px-4 py-2 text-sm text-gray-700">Register</Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                  
                    <Link to="/category" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm">
                      Category
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-red-700 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div  className='flex flex-wrap  justify-evenly'>
     
        {query.length > 0 && ( 
          data.length > 0 ? (
            data.map((flat, index) => (
              <SingleFlat key={flat._id} flat={flat} index={index} />
            ))
          ) : (
            <p className='text-3xl text-red-700'>No results found</p>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
