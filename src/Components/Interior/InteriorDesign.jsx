import { Link } from "react-router-dom";


const InteriorDesign = () => {
  return (
    <div className="   bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] py-12">
      <div className="container mx-auto py-8 px-4 flex flex-col lg:flex-row items-center">
        {/* First Section */}
        <div className="w-full lg:w-1/2 h-[700px] bg-cover bg-center relative rounded-lg border-4 border-gray-300 hover:border-gray-500 transition duration-300 ease-in-out" 
          style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/3d-rendering-modern-living-room-interior-design-concept_674881-1842.jpg')` }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" text-xl text-white md:text-5xl lg:text-6xl font-bold text-center">
              Transform Your Space with Stunning Interiors
            </h1>
          </div>
        </div>
        
        {/* Second Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-auto">
            <h2 className="text-2xl font-semibold mb-4">Explore Our Collections</h2>
            <p className="mb-4">Discover the finest interior designs that will elevate the look of your home. Our collections feature a variety of styles and themes to suit your taste.</p>
           <Link to='/interiorlist'> <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Show Interior Collection
            </button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
