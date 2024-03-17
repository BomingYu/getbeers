import { FaStar, FaStarHalf } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function BeerCard({ image, name, price, rating, reviews }) {
  const [imgError, setImgError] = useState(false);
  const stack = [];
  const number = rating;

  useEffect(()=>{

  },[])

  for (let i = 0; i <= number; i++) {
    if (number - i >= 1) {
      stack.push(
        <span key={`fs${i}`}>
          <FaStar />
        </span>
      );
    } else {
      if (number - i >= 0.25 && number - i < 0.75) {
        stack.push(
          <span key={`h${i}`}>
            <FaStarHalf />
          </span>
        );
      }
      if (number - i >= 0.75) {
        stack.push(
          <span key={`f${i}`}>
            <FaStar />
          </span>
        );
      }
    }
  }

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="flex flex-col gap-1 items-center bg-white bg-opacity-25 rounded-lg p-2 w-48 m-3">
      <img src={imgError ? '/icons/error.png' : image}  className="h-48" alt={name} onError={handleImageError}/>
      
      <h2 className="text-xl font-bold max-w-[11rem] truncate">{name}</h2>
      <h3 className="text-lg">{price}</h3>
      <div className="flex items-center w-48 justify-between p-2">
        <div className="flex">{stack}</div>
        <span className="text-sm">{reviews} reviews</span>
      </div>
    </div>
  );
}
