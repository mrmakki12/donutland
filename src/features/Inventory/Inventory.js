import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectInventory } from './inventorySlice'
import { addToCart } from '../Cart/cartSlice'
import './inventory.css'

export const Inventory = () => {

    const inventory = useSelector(selectInventory);
    const dispatch = useDispatch();

    const handleClick = (info) => {
        
        dispatch(addToCart(info))
    }

    return (
        <div className='donuts-container'>
            {
                inventory.map((donut, index) => (
                    <div className='donut-container'>
                        <div className={'donut'+ index} key={donut.name}>
                            <div className='image-container'>
                                <img src={donut.img} alt={donut.name} className='image'/>
                            </div>
                            <div className='description-container'>
                                <p className='name'>{donut.name.toUpperCase()}</p>
                                <p className='description'>{donut.description}</p>
                                <p className='price'>${donut.price}</p>
                                <button onClick={() => handleClick({id: donut.name, price: donut.price})}>ADD TO CART!</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    
}