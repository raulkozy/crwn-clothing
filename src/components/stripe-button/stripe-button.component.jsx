import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_DqGmd2I7KzE9u4xPII6CNJb0007y3mfbR8';

    const onToken = (token)  => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label="pay now"
            name='CRWN CLOTHING PVT LTD.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;