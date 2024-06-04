
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-black text-xl bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF]  py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><Link to="/" className="hover:underline">Home</Link></li>
            <li className="mb-2"><Link to="/category" className="hover:underline">Category</Link></li>
            <li className="mb-2"><Link to="/" className="hover:underline">About Us</Link></li>
            <li className="mb-2"><Link to="/" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

  
        <div className="mb-6 md:mb-0 md:w-1/3 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-center">123 Muktagaccha, City, Mymensingh, 12345</p>
          <p className="text-center">Email: tanvirrafi1999@gmail.com</p>
          <p className="text-center">Phone: +8801765341047</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} LandMark Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
