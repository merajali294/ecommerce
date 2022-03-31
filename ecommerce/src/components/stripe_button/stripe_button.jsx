import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceforstripe = price * 100
    const publishKey = 'pk_test_51HCqrICgZ0LkVZbAMgPQcSBjnjPFyjp8vOFx0z0DzwvuXf6Sfqx8IZq2ycqG81e4RQGz92Er964uqDAZs7yfHMmY00vWmoL8bN'
    
    const onToken = token  => {
        console.log('tokennnnnnnnnnn' );
        console.log(token );
        alert('payment succesfull')
    }

    return (
    <StripeCheckout label='paynow'
        name='ecommerce'
        image='https://svgshare.com/i/CUz.svg'
        description={` Your total price is $ ${price} ` }
        amount={priceforstripe}
        panellabel='Pay Now'
        token={onToken}
    /> 
    )

}

export default StripeCheckoutButton