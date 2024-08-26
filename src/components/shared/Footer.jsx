import { FaFacebookF } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-12 md:gap-[150px] text-center md:text-start p-4">
        <div className="text-white">
          <h2 className="font-bold text-xl mt-10 py-10">CYBER</h2>
          <p className="text-sm py-2 text-[#CFCFCF]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="text-white">
          <h2 className="font-bold text-xl mt-10 py-10">Services</h2>
          <p className="text-sm py-2 text-[#CFCFCF]">Bonus program</p>
          <p className="text-sm py-2 text-[#CFCFCF]"> Gift cards</p>
          <p className="text-sm py-2 text-[#CFCFCF]">Credit and payment</p>
          <p className="text-sm py-2 text-[#CFCFCF]">Service contracts</p>
          <p className="text-sm py-2 text-[#CFCFCF]">Non-cash account</p>
          <p className="text-sm py-2 text-[#CFCFCF]">Payment</p>
        </div>
        <div className="text-white">
          <h2 className="font-bold text-xl mt-10 py-10">
            Assistance to the buyer
          </h2>
          <p className="text-sm py-2 text-[#CFCFCF]">Find an order</p>
          <p className="text-sm py-2 text-[#CFCFCF]"> Terms of delivery</p>
          <p className="text-sm py-2 text-[#CFCFCF]">
            Exchange and return of goods
          </p>
          <p className="text-sm py-2 text-[#CFCFCF]">Guarantee</p>
          <p className="text-sm py-2 text-[#CFCFCF]">
            Frequently asked questions
          </p>
          <p className="text-sm py-2 text-[#CFCFCF]">
            Terms of use of the site
          </p>
        </div>
      </div>
      <div className="text-white flex items-center md:justify-normal justify-center gap-7 font-bold text-xl max-w-7xl mx-auto mt-10 py-5">
        <Link>
          <FaXTwitter />
        </Link>
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaTiktok />
        </Link>
        <Link>
          <FiInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
