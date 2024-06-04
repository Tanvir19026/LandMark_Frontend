/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBed, FaBath, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const FlatCollection = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch("https://land-mark-lh54.vercel.app/flatlist")
      .then((response) => response.json())
      .then((data) => setFlats(data))
      .catch((error) => console.error('Error fetching flats:', error));
  }, []);

  return (
    <div className=" mx-auto bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF]">
      <h2 className="text-3xl font-semibold p-4 text-center">All Property</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[35px] m-6">
        {flats.map((flat) => (
          <div key={flat._id} className="rounded-lg bg-white shadow-md overflow-hidden">
            <div className="h-60 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${flat.imageUrl})` }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{flat.title}</h3>
              <div className="flex items-center mb-2">
                <FaBed className="text-gray-500 mr-1" />
                <span>{flat.bedrooms} Beds</span>
              </div>
              <div className="flex items-center mb-2">
                <FaBath className="text-gray-500 mr-1" />
                <span>{flat.baths} Baths</span>
              </div>
              <div className="flex items-center mb-2">
                <FaDollarSign className="text-gray-500 mr-1" />
                <span>${flat.price}</span>
              </div>
              <div className="flex justify-center">
          <div className="flex justify-center">
            <Link to={`/flats/${flat._id}`}>
              <button className={`border border-gray-700 py-2 px-4 rounded-lg bg-cyan-400 mx-2 hover:bg-blue-500 font-bold`}>
                Details
              </button>
            </Link>
          </div>
          <button className={`border py-2 px-4 rounded-lg bg-green-700 hover:bg-gray-200 font-bold`}>
            Add to Cart
          </button>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlatCollection;
