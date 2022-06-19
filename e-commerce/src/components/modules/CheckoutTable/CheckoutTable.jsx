import React from 'react'
import {  useCart } from "react-use-cart";
import { 
    HStack, 
    Heading,  
    Spacer, 
    Table,
    Thead, 
    Tfoot,
    Tr, Th, Td,
    Tbody,
} from '@chakra-ui/react'
const CheckoutTable = () => {
    const {
        items,
        cartTotal,
    } = useCart();
  return (
    <Table>
        <Thead bg="#F8F8F8">
            <Tr>
                <Th fontSize={{base: "md", md: "lg", lg:"xl"}}>
                    Product
                </Th>
                <Th fontSize={{base: "md", md: "lg", lg:"xl"}}>
                    Quantity
                </Th>
                <Th fontSize={{base: "md", md: "lg", lg:"xl"}}>
                    Price
                </Th>
            </Tr>
        </Thead>
        <Tbody>
        {items.map((item) => (
        <Tr bg="#F8F8F8">
            <Td fontSize={{base: "md", md: "lg", lg:"xl"}}
                    fontWeight="500">
                {item.title}
            </Td>
            <Td fontSize={{base: "md", md: "lg", lg:"xl"}}
                    fontWeight="500">
                {item.quantity}
            </Td>
            <Td fontSize={{base: "md", md: "lg", lg:"xl"}}
                    fontWeight="500">
                ${item.price}
            </Td>
        </Tr>
        ))}
        </Tbody>
        <Spacer/>
        <Tfoot bg="#F8F8F8">
            <Tr>
                <Th fontSize={{base: "md", md: "lg", lg:"xl"}}>
                    Total:
                </Th>
                <Th></Th>
                <Th fontSize={{base: "md", md: "lg", lg:"xl"}}>
                    ${cartTotal}
                </Th>
            </Tr>
        </Tfoot>
    </Table>
  )
}

export default CheckoutTable