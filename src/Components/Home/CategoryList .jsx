import { Link } from 'react-router-dom';

const categories = [
  { name: 'Flat House', productCount: 3 },
  { name: 'Raw-House', productCount: 4 },
  { name: 'Luxury Home', productCount: 1},
  { name: 'Pentaloom flat', productCount: 2},
];

const CategoryList = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="w-full md:w-auto flex flex-col mb-8 md:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {categories.slice(0, 3).map((category) => (
              <div key={category.name} className="flex items-center space-x-2 text-xl font-bold text-black hover:underline">
                <div>{category.name}</div>
                <div className="bg-white text-black px-3 py-1 rounded-full">
                  {category.productCount}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.slice(3).map((category) => (
              <div key={category.name} className="flex items-center space-x-2 text-xl font-bold text-black hover:underline">
                <div>{category.name}</div>
                <div className="bg-white text-black px-3 py-1 rounded-full">
                  {category.productCount}
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Link to="/collection" className="bg-[#1abc9c] text-white py-3 px-6 text-xl rounded-lg hover:bg-[#16a085] transition duration-200">
            Show all Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
