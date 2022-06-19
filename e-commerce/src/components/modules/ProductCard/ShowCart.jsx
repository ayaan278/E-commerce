import React from 'react'
import {  useCart } from "react-use-cart";
import { Center, Container, 
  Button, Heading, 
  HStack, VStack, 
  Image, Spacer, 
  Divider, Link} from '@chakra-ui/react'

const ShowCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <Heading>Your cart is empty</Heading>;
  var total = 0;
  return (
    <Center>
        <Container maxW="container.lg" m="1em"
          p={{base: '0', md: '1.5em', lg: '2em'}}>
           {/* <Heading>Cart {{ totalUniqueItems }}</Heading> */}

        {items.map((item) => (
            <HStack key={item.id} w="100%" h="220px" 
                    m={{ base: '1em', md: '1em', lg: '1.5em' }}
                    bg="rgb(0, 163, 196,0.5)"
                    borderRadius="md">
              <VStack w={{base: '35%', md: '30%', lg: '20%'}}>
                <Image
                          h={{base: '150px', md: '180px', lg: '200px'}}
                          w={{base: '100px', md: '130px', lg: '150px'}}
                          objectFit="fill"
                          borderRadius="md"
                          src={item.image}
                          alt="product image"/>
              </VStack>
              <VStack w={{base: '30%', md: '40%', lg: '50%'}}
                       color="white" align="left">
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
                <VStack w={{base: '35%', md: '30%', lg: '30%'}}>
                  <HStack bg="#2A254B" borderRadius={'md'} >
                    <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      size={{base: 'xs', md: 'sm', lg: 'sm'}}
                    >-</Button>
                    <Heading fontSize={{base: 'sm', md: 'md', lg: 'lg'}} p="0.5em"
                              color={'white'}>{item.quantity}</Heading>
                    <Button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      size={{base: 'xs', md: 'sm', lg: 'sm'}}
                    >+</Button>
                  </HStack>
                  <Button onClick={() => removeItem(item.id)}
                          color="white"
                          bg="red.400"
                          size={{base: 'xs', md: 'sm', lg: 'sm'}}
                          >Remove Item
                  </Button>
                </VStack>
            </HStack>
            ))}
            <Divider/>
            <HStack m="1em">
              <HStack p="1em">
                <Heading fontSize={{base: 'md',md: 'xl',lg: '3xl'}}
                          fontWeight="500px">
                  Total price: ${cartTotal}
                </Heading>
              </HStack>
              <Spacer/>
              <Link href="/checkout">
                <Button size={{base: 'xs', md: 'sm', lg: 'sm'}}>Proceed to Checkout</Button>
              </Link>
            </HStack>
        </Container>
    </Center> 
  )
}


export default ShowCart