/* eslint-disable react/prop-types */

import Slider from 'react-slick';
import rowHouse from '../../assets/rowHouse.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Flat', image: rowHouse },
  { name: 'House', image: 'https://assets-global.website-files.com/62d597b300f3e8bc76aff8db/63f911b27523df9a1477d95b_63d8025de5fcbf20349eeb0f_homeowners.png' },
  { name: 'Raw-House', image: 'https://img6.arthub.ai/64dc0ce5-83c2.webp' },
  { name: 'Luxury Home', image: 'https://static.vecteezy.com/system/resources/previews/027/649/348/large_2x/luxury-house-with-veranda-big-tree-and-nice-landscape-ai-generated-photo.jpg' },
  { name: 'Pentaloom flat', image: 'https://img.freepik.com/premium-photo/futuristic-apartment-penthouse-interior-with-modern-design-desinged-using-generative-ai_666746-1286.jpg' },
];

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
/*<button className="absolute bottom-4 left-4 bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-200">
              Show More
            </button>
            */
  return (
    <div className="w-full bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] py-16 px-8">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.name} className="relative px-2">
            <img src={category.image} alt={category.name} className="w-full h-96 object-cover rounded-lg" />
            <div className="absolute top-4 left-4 text-white font-bold text-2xl bg-black bg-opacity-50 px-3 py-2 rounded">
              {category.name}
            </div>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    />
  );
};

export default Categories;
