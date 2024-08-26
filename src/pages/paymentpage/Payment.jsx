import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-5">
        <h2 className="text-center text-3xl font-bold">Payment </h2>
        <div>
          <Elements stripe={stripePromise}>
            <div className="w-1/2 mx-auto mt-10">
              <CheckoutForm />
            </div>
          </Elements>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
