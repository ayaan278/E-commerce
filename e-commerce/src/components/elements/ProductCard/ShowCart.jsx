import React from 'react'
import {  useCart } from "react-use-cart";
import { Center, Container, Button, Heading, HStack, VStack, Image, Box} from '@chakra-ui/react'

const ShowCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <Heading>Your cart is empty</Heading>;

  return (
    <Center>
        <Container maxW="container.lg" pt="2em">
           {/* <Heading>Cart {{ totalUniqueItems }}</Heading> */}

        {items.map((item) => (
            <HStack key={item.id} w="100%" h="220px" 
                    m="1em" 
                    bg="rgb(0, 163, 196,0.5)"
                    borderRadius="md">
              <VStack w="20%">
                <Image
                          h="200px"
                          w="150px"
                          objectFit="fill"
                          borderRadius="md"
                          src={item.image}
                          alt="product image"/>
              </VStack>
              <VStack w="50%" color="white" align="left">
                  <Heading 
                    fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
                    fontWeight={450}>
                    {item.title}
                  </Heading>
                  <Heading
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    fontWeight={400}>
                    ${item.price}
                  </Heading>
                </VStack>
                <VStack w="30%">
                  <HStack bg="#2A254B" borderRadius={'md'}>
                    <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >-</Button>
                    <Heading fontSize={'lg'} p="0.5em"
                              color={'white'}>{item.quantity}</Heading>
                    <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</Button>
                  </HStack>
                  <Button onClick={() => removeItem(item.id)}
                          color="white"
                          bg="red.400">Remove Item
                  </Button>
                </VStack>
            </HStack>
            ))}
        </Container>
    </Center> 
  )
}

export default ShowCart