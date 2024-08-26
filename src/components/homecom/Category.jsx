import { AiOutlineCamera } from "react-icons/ai";
import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

import { VscGame } from "react-icons/vsc";
import { Link } from "react-router-dom";


const Category = () => {
  
  return (
    <div className="bg-[#FAFAFA]  p-4 md:p-0 ">
      <div className="max-w-7xl mx-auto py-10">
        <div className="mt-5 mb-5 relative flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Browse By Category</h2>
          <div className="">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              <div className="bg-[#EDEDED] text-center rounded-xl p-6 ">
                <Link to="/products">
                  <CiMobile4 className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Phones</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <HiOutlineDesktopComputer className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Computers</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <BsSmartwatch className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Smart Watches</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <AiOutlineCamera className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Cameras</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <FaHeadphonesSimple className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Headphones</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <VscGame className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Gaming</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <HiOutlineDesktopComputer className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Computers</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <VscGame className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Gaming</p>
                </Link>
              </div>
              <div className="bg-[#EDEDED] text-center rounded-xl p-6">
                <Link to="/products">
                  <BsSmartwatch className="text-4xl inline-block" />
                  <p className="text-md font-semibold">Smart Watches</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
