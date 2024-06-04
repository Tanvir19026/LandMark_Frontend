/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const ManageProduct = () => {
  const {user}=UseAuth();
  console.log(user.email)
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch("https://land-mark-lh54.vercel.app/flatlist")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this Property?")) {
      try {
        const response = await fetch(`https://land-mark-lh54.vercel.app/flatlist/${productId}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          setProducts(products.filter(product => product._id !== productId));
          console.log("Property deleted successfully:", productId);
          setShowToast(true);
        } else {
          console.error("Failed to delete product:", response.status);
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="container mx-auto py-8 text-xl">
      {showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span>Property Deleted successfully!</span>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-3xl">
            
              <th className="text-left py-4 px-6">Title</th>
              <th className="text-left py-4 px-6">Price</th>
              <th className="text-left py-4 px-6">Square Feet</th>
              <th className="text-left py-4 px-6">Baths</th>
              <th className="text-left py-4 px-6">Bedrooms</th>
              <th className="text-left py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-300 ">
               
                <td className="text-left py-4 px-6">{product.title}</td>
                <td className="text-left py-4 px-6">${product.price}</td>
                <td className="text-left py-4 px-6">{product.squareFeet}</td>
                <td className="text-left py-4 px-6">{product.baths}</td>
                <td className="text-left py-4 px-6">{product.bedrooms}</td>
                <td className="text-left py-4 px-6">
                  <div className="flex items-center space-x-4">
                    <Link to={`/dashboard/editproperties/${product._id}`}>
                      <button className=" text-blue-500 hover:text-blue-700 focus:outline-none">
                        <BsPencilSquare className="w-6 h-6" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-500 p-6 hover:text-red-700 focus:outline-none"
                    >
                      <BsTrash className="w-6 h-6" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
