import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Stripe = (props) => {
    console.log(props);
    return (
        <>

            <StripeCheckout stripeKey={process.env.REACT_APP_KEY}
                // amount={price * 100}
                // name={name}
                // token={handleToken}



            >
                <button className='btnstyle' >Buy Now</button>

            </StripeCheckout>
        </>
    )
}

export default Stripe