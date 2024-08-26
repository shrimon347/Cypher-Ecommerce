/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  const {_id,name, price, imageUrl} = product

  return (
    <div className="">
      <div className="bg-[#F6F6F6]  rounded-md shadow-lg p-7 relative">
        <div className="absolute top-4 right-5  ">
          <FaRegHeart className="text-xl text-[#909090] hover:text-red-500 cursor-pointer" />
        </div>
        <div className="flex mt-5 justify-center">
          <img src={imageUrl} alt="" className="w-32 h-32 object-cover" />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 ">{name}</h3>
          <p className="text-gray-600 mt-2">${price}</p>
        </div>
        <Link to={`/product/${_id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:border-black hover:text-black border transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
