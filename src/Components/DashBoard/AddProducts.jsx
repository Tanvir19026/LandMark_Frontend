import { useState } from "react";
import { FaHome, FaRulerCombined, FaBed, FaBath, FaDollarSign, FaList, FaImage } from 'react-icons/fa';

import image from '../../assets/undraw_add_content_re_vgqa.svg'

const AddProducts = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmation = window.confirm('Are you sure you want to Add the Property?');
    if (!confirmation) {
      return;
    }

    const form = e.target;
  
    const title = form.title.value;
    const width = form.width.value;
    const height = form.height.value;
    const bedrooms = form.bedrooms.value;
    const baths = form.baths.value;
    const price = form.price.value;
    const category = form.category.value;
    const imageUrl = form.imageUrl.value;

    const data = { title, squareFeet: `${width} * ${height}`, bedrooms, baths, price, category, imageUrl };

    await fetch("https://land-mark-lh54.vercel.app/flatlist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      })
      .catch(() => {
        setAlertMessage('An error occurred while adding the Property.');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
      });
  };

  return (
    <div className="container mx-auto p-4">
      {showAlert && (
        <div className="alert alert-error">
          <span>{alertMessage}</span>
        </div>
      )}
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-white text-2xl">Property added successfully!</span>
          </div>
        </div>
      )}
      <h1 className="text-5xl font-bold text-center mb-8">Add a Property</h1>
      <div className="flex flex-col md:flex-row gap-8  p-6 rounded-lg">
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div className="border rounded-md overflow-hidden w-full h-70 flex items-center justify-center bg-gray-100 text-gray-500">
            <img src={image} alt="add image" />
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border border-black rounded-lg bg-gray-100 p-4 focus-within:border-blue-500">
              <FaHome className="mr-2" />
              <input
                className="bg-transparent w-full outline-none"
                type="text"
                name="title"
                placeholder="Property Title"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1 flex flex-col">
                  <label className="flex items-center text-gray-600 mb-2">
                    <FaRulerCombined className="mr-2" />
                    Width
                  </label>
                  <input
                    className="bg-gray-100 p-4 border border-black rounded-lg w-full outline-none focus:border-blue-500"
                    type="number"
                    name="width"
                    placeholder="Width"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="flex items-center text-gray-600 mb-2">
                    <FaRulerCombined className="mr-2" />
                    Height
                  </label>
                  <input
                    className="bg-gray-100 p-4 border border-black rounded-lg w-full outline-none focus:border-blue-500"
                    type="number"
                    name="height"
                    placeholder="Height"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="flex items-center text-gray-600 mb-2">
                    <FaBed className="mr-2" />
                    Bedrooms
                  </label>
                  <input
                    className="bg-gray-100 p-4 border border-black rounded-lg w-full outline-none focus:border-blue-500"
                    type="number"
                    name="bedrooms"
                    placeholder="Bedrooms"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="flex items-center text-gray-600 mb-2">
                    <FaBath className="mr-2" />
                    Baths
                  </label>
                  <input
                    className="bg-gray-100 p-4 border border-black rounded-lg w-full outline-none focus:border-blue-500"
                    type="number"
                    name="baths"
                    placeholder="Baths"
                  />
                </div>
              </div>
              <div className="flex items-center border border-black rounded-lg bg-gray-100 p-4 focus-within:border-blue-500">
                <FaDollarSign className="mr-2" />
                <input
                  className="bg-transparent w-full outline-none"
                  type="number"
                  name="price"
                  placeholder="Price"
                />
              </div>
              <div className="flex items-center border border-black rounded-lg bg-gray-100 p-4 focus-within:border-blue-500">
                <FaList className="mr-2" />
                <select
                  className="bg-transparent w-full outline-none"
                  name="category"
                >
                  <option value="">Select Category</option>
                  <option value="Flat House">Flat House</option>
                  <option value="Raw-House">Raw-House</option>
                  <option value="Luxury Home">Luxury Home</option>
                  <option value="Pentaloom flat">Pentaloom flat</option>
                </select>
              </div>
              <div className="flex items-center border border-black rounded-lg bg-gray-100 p-4 focus-within:border-blue-500">
                <FaImage className="mr-2" />
                <input
                  className="bg-transparent w-full outline-none"
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                className="btn mt-4 w-full text-lg h-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600"
                type="submit"
                value="Add Property"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
