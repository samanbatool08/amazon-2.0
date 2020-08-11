import React from 'react'
import { useStateValue } from './StateProvider';
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <img 
                className='checkout__ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                alt=''
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Youur Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one--or more--now, click the "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'> Your Shopping cart</h2>

                    {/* list out every item in cart */}
                    {basket.map(item => (
                        <CheckoutProduct 
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))

                    }
                </div>
            )}
        </div>
    )
}

export default Checkout;
