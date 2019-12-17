import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_npujb8ZrUTCjEWdgk7CKuQ1Q00MXOM3775';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='XTREND Ltd.'
      currency='SGD'
      locale='SG'
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      allowRememberMe
    />
  )
};

export default StripeCheckoutButton;