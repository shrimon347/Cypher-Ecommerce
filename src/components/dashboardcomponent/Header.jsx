/* eslint-disable react/prop-types */

import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center ">
      <div className="text-xl font-bold">Cypher ECommerce Dashboard</div>
      <div className="flex items-center">
        <FaBars className="lg:hidden cursor-pointer mr-4" onClick={toggleSidebar} />
        <div className="mr-4">Welcome, Admin</div>
        <img
          src="https://via.placeholder.com/40"
          alt="Admin Avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
