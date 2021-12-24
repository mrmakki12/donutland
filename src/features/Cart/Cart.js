import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, clearCart } from './cartSlice';
import './cart.css';

export const Cart = (props) => {

    const { setDisplay } = props;

    const cart = useSelector(selectCart);
    const cartArr = Object.values(cart);
    const dispatch = useDispatch();

    const handleClear = () => {
        
        dispatch(clearCart())
    }

    let total = 0;
    cartArr.map(item => (
        total += item.quantity * item.price
    ))

    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <h1>YOUR CART!</h1>
            </div>
            <div className='cart-info'>
                <h1>NAME</h1>
                <h1>QUANTITY</h1>
            </div>
            {
                cartArr.map(item => (
                    <div className='item-info'>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                ))
            }
            <div className='total-header'>
                <h1>Total: </h1>
                <h1>${total.toFixed(2)}</h1>
            </div>
            <div>
                <button className='order-button' onClick={() => {handleClear(); setDisplay('flex')}}>ORDER!</button>
            </div>
        </div>
    )
}