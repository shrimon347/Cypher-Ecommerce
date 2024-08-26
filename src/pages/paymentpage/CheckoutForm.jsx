import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useMemo, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [traansactionId, setTraansactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setclientSecret] = useState("");

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
  useEffect(() => {
    if (total > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: total })
        .then((res) => {
          console.log(res.data.clientSecret);
          setclientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, total]);
  const handletoSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //confirm paymnet
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm eroor");
    } else {
      console.log("payment success");
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTraansactionId(paymentIntent.id);

        //now save the payment in the database
        const payment = {
          email: user?.email,
          price: total,
          traansactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          productIds: cart.map((item) => item.produtId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data);
        refetch()
        if(res.data?.paymentResult?.insertedId) {
          Swal.fire({
            icon : 'success',
            title : 'Thanck you for purches our product',
            showConfirmButton : false,
            timer : 1500
          })
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handletoSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="mt-10 text-red-600 font-bold">{error}</p>
        <button
          className="mt-10 btn bg-black text-white px-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {traansactionId && (
          <p className="text-green-500 font-semibold text-xl">
            Your transaction id is : {traansactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
