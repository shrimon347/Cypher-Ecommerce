import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md"; // Ensure you have this import for the icon
import ProductCard from "../../components/homecom/ProductCard";
import Accoirdin from "./Accoirdin";
import useProducts from "../../hooks/useProducts";

const ProductsData = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [products,loading] = useProducts();


  console.log(products);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  const applyFilter = () => {
    // Apply filter logic here
    setIsFilterVisible(false);
  };
  if (loading) {
    return <div className="mx-auto max-w-7xl text-center p-[10%]"><span className="loading loading-spinner loading-xl"></span></div>;
  }
  return (
    <div className="max-w-7xl p-4 mx-auto relative">
      <div className="flex flex-col md:flex-row py-4">
        <div className="md:w-1/4 p-4 hidden md:block">
          <Accoirdin />
        </div>

        <div className="flex-1 md:w-3/4 px-3">
          <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <div className="mb-4 md:mb-0">
                <h2>Selected Products: {products.length}</h2>
              </div>
              <div className="flex space-x-2 justify-end w-full md:w-auto">
                <button
                  className="btn md:hidden btn-primary w-1/2 md:w-auto"
                  onClick={toggleFilterVisibility}
                >
                  {isFilterVisible ? "Close Filters" : "Open Filters"}
                </button>
                <select className="select select-bordered w-full md:w-auto max-w-xs">
                  <option defaultValue>By rating</option>
                  <option>Price low to high</option>
                  <option>Price high to low</option>
                </select>
              </div>
            </div>
          </div>

          <div
            className={`transition-transform duration-300 ${
              isFilterVisible
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            } absolute top-0 left-0 h-full w-full md:hidden bg-white p-4 shadow-lg z-10`}
          >
            <div className="flex justify-between mb-4">
              <button className="text-3xl" onClick={closeFilter}>
                <MdArrowBackIos />
              </button>
            </div>
            <Accoirdin />
            <div>
              <button
                className="btn bg-black text-white w-full mt-10"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
