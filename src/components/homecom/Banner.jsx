import img1 from "../../assets/images/IphoneImage.png"

const Banner = () => {
  return (
    <div className=" bg-black md:bg-gradient-to-l  from-[#322d36] via-[#202022]  to-[#000000]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 items-center gap-10">
            <div className="md:col-span-8 items-center">
                <div className="text-center md:text-left mt-10">
                    <h3 className="text-gray-700 font-bold text-2xl mb-2">Pro.Beyond.</h3>
                    <h2 className="text-7xl sm:text-8xl text-white font-thin mb-3">IPhone 14 <span className="font-semibold">Pro</span></h2>
                    <p className="text-gray-700 font-semibold mb-5">Created to change everything for the better. For everyone</p>
                    <div className="mt-10">
                        <button className="mt-6 px-6 py-2 bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300">Shop now</button>
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 items-center">
                <img src={img1} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Banner