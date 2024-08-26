import { useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import useCart from "../../hooks/useCart";
import Cart from "../cartpage/Cart";

export const Cartdetails = () => {
  const [cart] = useCart();

  // Calculate subtotal
  const subTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Define tax rate and calculate estimated tax
  const taxRate = 0.1; // 10% tax rate
  const estimatedTax = useMemo(() => subTotal * taxRate, [subTotal]);

  // Calculate total
  const total = useMemo(
    () => subTotal + estimatedTax,
    [subTotal, estimatedTax]
  );

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mt-10 mb-10">Shopping Cart </h2>
          {cart.map((cartItem) => (
            <Cart key={cartItem._id} cartItem={cartItem} />
          ))}
        </div>
       { cart.length === 0 ? <></> : <div className="p-5 border w-full mb-10 mt-10">
          <p className="text-2xl font-bold mt-5">Order Summary</p>
          <div className="space-y-2 mt-10">
            <p className="font-medium">Subtotal: ${subTotal.toFixed(2)}</p>
            <p className="font-medium">
              Estimated Tax: ${estimatedTax.toFixed(2)}
            </p>
            <p className="font-medium">Estimated Shipping & Handling: $0.00</p>{" "}
            {/* Add actual shipping cost if applicable */}
            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          <div className="mt-4">
            <Link to="/payment">
              <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900">
                Checkout
              </button>
            </Link>
          </div>
        </div>}
      </div>
      <Footer />
    </div>
  );
};
