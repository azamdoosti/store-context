import React from 'react'
import { useCart } from '../context/CartContext'
import BasketCard from './BasketCard'

const CheckoutPage = () => {
const [state , dispatch] = useCart()

const clickHandeler =(type , payload) => dispatch ({type,payload})

 console.log(state)
  return (
    <div><div>
    {state.selectedItems.map(product=>(
        <BasketCard key={product.id} data={product} clickHandeler={clickHandeler}/>
    ))}    
    </div></div>
  )
}

export default CheckoutPage