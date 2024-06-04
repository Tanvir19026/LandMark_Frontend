
import { FaHome, FaCouch, FaBuilding } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-12    bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Flats/House Seller */}
          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaHome className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Flats/House Seller</h3>
              <p className="text-gray-600">We offer a wide range of flats and houses for sale to fit your needs and budget.</p>
            </div>
          </div>

          {/* Interior Design */}
          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaCouch className="text-4xl text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Interior Design</h3>
              <p className="text-gray-600">Our interior design services help you create beautiful and functional living spaces.</p>
            </div>
          </div>

          {/* Overall Real Estate Services */}
          <div className="w-full md:w-1/3 p-4">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <FaBuilding className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Real Estate Services</h3>
              <p className="text-gray-600">We provide comprehensive real estate services to assist with all your property needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
