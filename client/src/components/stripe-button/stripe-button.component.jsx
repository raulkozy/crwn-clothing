import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_DqGmd2I7KzE9u4xPII6CNJb0007y3mfbR8";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment Successfull");
      })
      .catch(error => {
        console.log("payment error: ", error);
        alert(
          "There was an issue with your payment. Please be sure you use the provided Credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="pay now"
      name="CRWN CLOTHING PVT LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
