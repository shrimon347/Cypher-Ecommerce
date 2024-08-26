import img1 from "../../assets/images/PlayStation.png";
import img2 from "../../assets/images/head.png";
import img4 from "../../assets/images/laptop.png";
import img3 from "../../assets/images/vision.png";

const Hero = () => {
  return (
    <section className=" bg-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-12 p-4 md:p-0">
        <div className="md:col-span-7 space-y-10">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
            <div className="flex justify-center">
              <img
                src={img1}
                alt="PlayStation 5"
                className="max-w-full h-auto"
              />
            </div>
            <div className="md:text-start text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                PlayStation 5
              </h2>
              <p className="text-gray-600 mt-4">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="bg-[#EDEDED] p-4 md:flex-row flex-col flex overflow-hidden justify-start items-center">
              <img
                src={img2}
                alt="Apple AirPods Max"
                className="md:relative md:right-[120px]"
              />
              <div className="">
                <h3 className="text-xl font-normal text-gray-800">
                  Apple  AirPods  <span className="font-bold">Max</span>
                </h3>
                <p className="text-gray-600 md:text-start text-center">
                  Computational audio.<br />Listen, it&apos;s powerful.
                </p>
              </div>
            </div>
            <div className="bg-[#353535]  p-4 items-center md:flex-row flex-col flex overflow-hidden">
              <img
                src={img3}
                alt="Apple Vision Pro"
                className="md:relative  md:top-5 md:right-[170px]"
              />
              <div className=" md:relative md:left-[-100px] md:text-start text-center">
                <h3 className="text-xl font-bold text-white">
                  Apple Vision Pro
                </h3>
                <p className="text-gray-300 md:text-start">
                  An immersive way to experience entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center bg-gray-50 p-10">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
              MacBook Air
            </h2>
            <p className="text-gray-600 text-center">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <div className="flex justify-center">
              <img src={img4} alt="MacBook Air" className="max-w-full h-auto" />
            </div>
            <button className="mt-6 px-6 py-2 bg-transparent border border-gray-800 text-gray-800 font-semibold rounded hover:bg-gray-800 hover:text-white transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
