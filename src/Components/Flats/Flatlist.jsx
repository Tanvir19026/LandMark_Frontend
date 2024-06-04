import { useState, useEffect } from 'react';
import SingleFlat from './SingleFlat';

const FlatList = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch("https://land-mark-lh54.vercel.app/flatlist")
      .then((response) => response.json())
      .then((data) => setFlats(data))
      .catch((error) => console.error('Error fetching flats:', error));
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#46C8D3] to-[#D6FCFF] p-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flats.slice(0, 6).map((flat, index) => (
          <SingleFlat key={index} flat={flat} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FlatList;
