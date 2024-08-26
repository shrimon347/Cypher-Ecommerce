/* eslint-disable react/prop-types */

const ProductCarosul = ({ product }) => {
  const { title, description, image, color,} = product;
  return (
    <div>
      <div className="!py-10 md:p-0 p-4">
        <div
          className="shadow-lg md:shadow-none p-7"
          style={{ backgroundColor: color }}
        >
          <div className="flex justify-center">
            <img src={image} alt="" className="object-cover h-[400px] p-4" />
          </div>
          <div className="md:text-start text-center">
            <h3 className={`${product?.textcolor?'text-3xl text-white':'text-3xl text-black'}`}>{title}</h3>
            <p className="text-gray-400  mt-2 md:w-[80%]">{description}</p>
          </div>
          <div className="text-center md:text-start">
            <button className={`${product?.textcolor?'border-white text-white mt-4 w-[40%] py-3 border  font-semibold rounded hover:bg-white hover:text-black transition duration-300':"border-black mt-4 w-[40%] py-3 border   text-black font-semibold rounded hover:bg-black hover:text-white transition duration-300"}`}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarosul;
