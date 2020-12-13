//create a new account for stripe
/*here in developer section you will get publishable API KEY ,and secret key as well,
we will copy  this publishable API key in our code,these code will tell stripe that 
our app  want to access this stripe account.for now we will not use secret key(its a live key,reside on server),
bcoz it will be used at server side,for applying charges*/
/*yarn add react-stripe-checkout*/
//above libarary will provide us react bound version of stripe checkout button

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//payment request  with axios
import axios from 'axios';


const StripeCheckoutButton=({price})=>{
//stipe works with cents so we need to multiply original amount with 100
const priceForStripe=price*100;
const publishableKey="pk_test_51HqX6LEMcYHTtZjO2HO3B8a3youFbbccVGd0RqIdDoH2jnKbDYpjeMzGqraPj5AQbG3M5EqDobBHx0NagmkQDb0l005M9SzI6I";

const onToken=(token)=>{
    console.log(token);
//send request to /payment route to the server(you can find /payment route in server.js file.)
    axios({
        url:'payment',
        method:'post',
        data:{
            description:'software development services',
            amount:priceForStripe,
            token:token
        }
        
    }).then(response=>{
        alert("Payment successfull");
    }).catch(error=>{
        console.log('Payment error');
        console.log(error);
        alert('There was an issue with your payment.Please make sure that you have provided used credit card');    
                })

}

return(
    <StripeCheckout
        label='Pay Now'
        name='CROWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description ={`yout toatl is $${price}`}
        amount={priceForStripe}
        token={onToken}
        panelLabel='Pay Now'
        stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton;