/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";



const FlatsDetails = () => {


    const flatDetails=useLoaderData();
    const{title,squareFeet,bedrooms,baths,price,category,imageUrl}=flatDetails;
   
  
    return (
     <div className="flex justify-center h-full w-full bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] py-16 px-8 ">
         <div className=" mt-4 p-4 rounded-lg w-full md:w-80 lg:w-96  ">
        <div
          className="h-80 bg-center bg-cover rounded-t-lg mb-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <h3 className={'text-2xl font-semibold text-center mb-2'}>{title}</h3>
        <div className={`text-center mb-4`}>
          <span className="text-lg">BedRooms: </span>
          <span className="font-bold text-lg">{bedrooms}</span>
        </div>
        <div className={`text-center mb-4`}>
          <span className="text-lg">Bath: </span>
          <span className="font-bold text-lg">{baths}</span>
        </div>
        <div className={`text-center mb-4`}>
          <span className="text-lg">Category: </span>
          <span className="font-bold text-lg">{category}</span>
        </div>
        <div className={`text-center mb-4`}>
          <span className="text-lg">Square Feet: </span>
          <span className="font-bold text-lg">{squareFeet}</span>
        </div>
        <p className={'text-lg text-center mb-4 '}>Price: <span className="font-bold">${price}</span></p>
       
      </div>
     </div>
    );
  
};

export default FlatsDetails;