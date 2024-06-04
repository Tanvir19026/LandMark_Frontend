
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/bannerImg.png'

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
      
        <div className="text-white max-w-lg mb-12 lg:mb-0 lg:mr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl mb-8">
            Explore our extensive collection of properties and find the perfect flat for you and your family.
          </p>
         <Link to='/collection'> <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg hover:bg-red-600 transition duration-300">
            Show Flats
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-md lg:max-w-xl">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img src={bannerImage} alt="Banner" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
