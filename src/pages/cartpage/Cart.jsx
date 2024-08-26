/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LuMinus, LuPlus } from "react-icons/lu";
import img from "../../assets/images/phone.png";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = ({ cartItem }) => {
  const { price, name, _id, quantity: initialvalue } = cartItem;
  const axiosSecure = useAxiosSecure();
  const [quantity, setItemQuantity] = useState(initialvalue);
  const [, refetch] = useCart();

  const handletoDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      refetch();
      toast.success("Product deleted from the Cart");
    });
  };

  const handleIncrease = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setItemQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  useEffect(() => {
    const updateQuantity = async () => {
      try {
        await axiosSecure.put(`/carts/${_id}`, { quantity });
        refetch();
      } catch (error) {
        toast.error("Error updating quantity");
      }
    };

    updateQuantity();
  }, [quantity, _id, axiosSecure, refetch]);

  const totalPrice = price * quantity;

  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-1">
        <div className="w-[20%] md:w-auto">
          <img src={img} className="w-full md:w-[50px]" alt="" />
        </div>
        <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-bold text-[12px]">{name}</p>
          <p className="mt-1 text-[11px] break-all">#{_id}</p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto justify-center">
          <div className="cursor-pointer" onClick={handleDecrease}>
            <LuMinus />
          </div>
          <div className="border px-3 py-2 rounded">
            <p className="font-semibold">{quantity}</p>
          </div>
          <div className="cursor-pointer" onClick={handleIncrease}>
            <LuPlus />
          </div>
        </div>
        <div className="flex items-center justify-between w-full md:w-auto p-5 md:p-0">
          <div className="font-semibold">
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div onClick={() => handletoDelete(_id)} className="ml-4 md:ml-0">
            <RxCross2 className="text-2xl font-semibold cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="divider w-full md:w-[85%] mx-auto mt-4"></div>
    </div>
  );
};

export default Cart;
