import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/dashboardcomponent/Header";
import Sidebar from "../components/dashboardcomponent/Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <div className="max-w-7xl mx-auto py-5">
        <div className="flex">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col">
            <Header toggleSidebar={toggleSidebar} />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
