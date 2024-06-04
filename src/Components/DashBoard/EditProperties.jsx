/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import image from '../../assets/undraw_undraw_undraw_undraw_selection_f3no_jw9h_-1-_nxfh_-1-_6d1x.svg';

const EditProduct = () => {
  const { id } = useParams();

  console.log(id)

  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    price:"",
    squareFeet: "",
    baths: "",
    bedrooms: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3000/flatlist/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    alert("Are you sure you want to update the product?");
    const { _id, ...updateData } = formData;  
    await fetch(`https://land-mark-lh54.vercel.app/flatlist/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then(() => {
        
        setShowToast(true);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Property</h1>
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-white text-2xl">Property Updated successfully!</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1 flex items-center justify-center">
          <img src={image} alt="Banner" className="w-3/4 h-auto" />
        </div>
        <div className="lg:col-span-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="lg:mr-4">
              <label htmlFor="title" className="block text-lg font-bold text-blue-600">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="title" className="block text-lg font-bold text-blue-600">Title</label>
              <input
                type="text"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="image_url" className="block text-lg font-bold text-blue-600">Image URL</label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="squareFeet" className="block text-lg font-bold text-blue-600">Square Feet</label>
              <input
                type="text"
                name="squareFeet"
                id="squareFeet"
                value={formData.squareFeet}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="baths" className="block text-lg font-bold text-blue-600">Baths</label>
              <input
                type="text"
                name="baths"
                id="baths"
                value={formData.baths}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <label htmlFor="bedrooms" className="block text-lg font-bold text-blue-600">Bedrooms</label>
              <input
                type="text"
                name="bedrooms"
                id="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="input-field w-full lg:w-3/4 p-3 border border-gray-300 rounded-md"
                
              />
            </div>
            <div className="lg:mr-4">
              <button type="submit" className="btn bg-blue-500 text-white px-10 py-4 rounded-md hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
