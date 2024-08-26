import { useContext, useEffect, useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../contextProvider/SidebarContext";
import useCart from "../../hooks/useCart";
import Cart from "../../pages/cartpage/Cart";

const Sidebar = () => {
  const [cart] = useCart();
  const { isOpen, handleClose } = useContext(SidebarContext);
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const sidebarRef = useRef();

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`${
        isOpen ? "right-0 z-[5000]" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[45vw] xl:max-w-[35vw]
        transition-all duration-300 z-[1000] px-4 lg:px-[35px]
    `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({cart.length})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="h-[calc(90%-150px)] overflow-y-auto">
        {cart.map((cartItem) => (
          <Cart key={cartItem._id} cartItem={cartItem} />
        ))}
      </div>
      {cart.length === 0 ? (
        <></>
      ) : (
        <div className="p-4 border-t">
          <div className="flex justify-between px-2">
            <div>
              <p className="font-semibold">SubTotal :</p>
            </div>
            <div className="mr-14">
              <p className="font-semibold">${subTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="text-center bg-black mt-10 text-white w-full mx-auto p-4">
            <Link to="/cart">
              <button onClick={handleClose}>Proceed To checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
