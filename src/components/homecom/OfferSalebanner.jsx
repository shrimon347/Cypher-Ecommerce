const OfferSalebanner = () => {
  return (
    <div className="bg-[url('/src/assets/images/Banner2.png')] bg-center bg-cover ">
      <div className="text-center py-[150px]">
        <h2 className="text-6xl font-extralight text-center  text-white">
          Big Summer <span className="font-bold">Sale</span>{" "}
        </h2>
        <p className="text-[#787878] text-sm mt-5">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <div className="text-center">
          <button className="mt-4 w-[140px] py-3 border  border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSalebanner;
