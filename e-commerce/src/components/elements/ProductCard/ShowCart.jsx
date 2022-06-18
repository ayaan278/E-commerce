import React from 'react'
import {  useCart } from "react-use-cart";
import { Center, Container, Button, Heading, HStack, VStack, Image , Spacer} from '@chakra-ui/react'

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
                    gap="1em" pb="1em">
              <VStack w="20%">
                <Image
                          h="200px"
                          w="150px"
                          objectFit="fill"
                          borderRadius="md"
                          src={item.image}
                          alt="product image"/>
              </VStack>
              <VStack w="50%">
                  <Heading align="center"
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    fontWeight={450}>
                    {item.title}
                  </Heading>
                  <Heading
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                    fontWeight={400}>
                    {item.price}
                  </Heading>
                </VStack>
                <VStack w="30%">
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
                </VStack>
            </HStack>
            ))}
        </Container>
    </Center> 
  )
}

export default ShowCart