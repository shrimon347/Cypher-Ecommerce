/* eslint-disable react/prop-types */

import {
  FaChartLine,
  FaHome,
  FaShoppingCart,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 z-20`}
    >
      <div className="text-2xl font-bold p-4 flex justify-between items-center">
        Dashboard
        <FaTimes className="lg:hidden cursor-pointer" onClick={toggleSidebar} />
      </div>
      <ul className="flex-1 min-h-screen">
        <Link to="/" className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <li  className="flex items-center">
            <FaHome className="mr-2" /> Home
          </li>
        </Link>
        <Link to="/dashboard/products" className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <li  className="flex items-center">
            <FaShoppingCart className="mr-2" /> Products
          </li>
        </Link>
        <Link to="/dashboard/addproduct" className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <li  className="flex items-center">
            <FaShoppingCart className="mr-2" /> Add Product
          </li>
        </Link>
       
        <Link to=""  className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <li className="flex items-center">
            <FaShoppingCart className="mr-2" /> Order
          </li>
        </Link>

        <Link className="flex items-center hover:bg-gray-700 cursor-pointer" to="/dashboard/users">
          <li className="p-4  flex items-center">
            <FaUsers className="mr-2" /> Customers
          </li>
        </Link>
        <Link to="" className="p-4 hover:bg-gray-700 cursor-pointer flex items-center">
          <li  className="flex items-center">
            <FaChartLine className="mr-2" /> Analytics
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
