import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

const Root = () => {
  return (
    <div>
      <Sidebar />
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;
