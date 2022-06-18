import React from 'react'
import Checkout from '../modules/Checkout/Checkout'
import { useCart } from "react-use-cart";
const Cart = () => {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
    alert(".");
  };
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;

  return (
    <>
        <Checkout/>
        
    </>
  )
}

export default Cart