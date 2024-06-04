/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleFlat = ({ flat, index }) => {
    const cardBackgroundColor = index % 2 === 0 ? '#4ECBD5' : '#BCF2F7';
    const textColor = index % 2 === 0 ? 'text-white' : 'text-black';
    const buttonTextColor = index % 2 === 0 ? 'text-white' : 'text-black';
    const buttonBorderColor = index % 2 === 0 ? 'border-white' : 'border-black';
  
    return (
      <div className="mt-4 p-4 rounded-lg w-full md:w-80 lg:w-96" style={{ backgroundColor: cardBackgroundColor, height: '580px', width: '400px' }}> {/* Set fixed height and width */}
        <div
          className="h-80 w-full bg-center bg-cover rounded-t-lg mb-4"
          style={{ backgroundImage: `url(${flat.imageUrl})` }}
        ></div>
        <h3 className={`text-2xl font-semibold text-center mb-2 ${textColor}`}>{flat.title}</h3>
        <div className={`text-center mb-4 ${textColor}`}>
          <span className="text-lg">Square Feet: </span>
          <span className="font-bold text-lg">{flat.squareFeet}</span>
        </div>
        <p className={`text-lg text-center mb-4 ${textColor}`}>Price: <span className="font-bold">${flat.price}</span></p>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <Link to={`/flats/${flat._id}`}>
              <button className={`border border-gray-700 py-2 px-4 rounded-lg bg-cyan-400 mx-2 hover:bg-blue-500 font-bold ${buttonTextColor} ${buttonBorderColor}`}>
                Details
              </button>
            </Link>
          </div>
          <button className={`border py-2 px-4 rounded-lg bg-transparent hover:bg-gray-200 font-bold ${buttonTextColor} ${buttonBorderColor}`}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default SingleFlat;
