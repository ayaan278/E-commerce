import React from 'react'
import {  useCart } from "react-use-cart";
import { Button } from '@chakra-ui/react'
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.image} x {item.name} &mdash;
            <Button
              onClick={() => updateItemQuantity(item.id, item.image)}
            >-
            </Button>
            <Button
              onClick={() => updateItemQuantity(item.id, item.image)}
            >+
            </Button>
            <Button onClick={() => removeItem(item.id)}>&times;
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart