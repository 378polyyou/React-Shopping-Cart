import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../Components/CartProduct';
import { totalItem, totalPrice } from '../Features/CartReducer';

const Cart = () => {
    const { cart } = useContext(CartContext);
    const shippingCost = 100;
    const total = totalPrice(cart) + shippingCost;

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-8">
                    {cart.length === 0 ? (
                        <h5>Your cart is empty.</h5>
                    ) : (
                        cart.map((p, index) => (
                            <CartProduct key={index} product={p} />
                        ))
                    )}
                </div>
                <div className="col-4 ">
                    <div className="bg-secondary p-3 text-white">
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: ${total.toFixed(2)}</h5>
                        <h5>Shipping Cost: ${shippingCost}</h5>
                        <button className='btn btn-warning'>Checkout</button>
                        <button className='btn btn-light'
                        onClick={() => dispatch({ type: "ApplyCoupon"})}>คูปอง 50 บาท
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
