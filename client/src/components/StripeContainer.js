import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LgrUmCwzDCX8biEBVfXXeZWz9TwWi5yG2q9k7lVBhctG9y2HCrcy4AVcltXn5VKD3dbEcxNTOgzVggc1lekY2tJ00sHgXbKu8"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;