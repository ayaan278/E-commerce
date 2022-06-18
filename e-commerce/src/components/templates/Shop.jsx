import React from 'react'
import Filters from '../modules/Filters/Filters'
import { HStack, VStack, Heading, Show} from '@chakra-ui/react'
import Store from '../modules/Store/Store'
const Shop = (props) => {
  
  return (
    <VStack w="100%">
      <HStack w="100%" alignItems="center" bg="black" color="white">
        <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                 p="2em"
                >All Products</Heading>
      </HStack>
      <HStack w="100%">
        <Filters/>
        <Store/>
      </HStack>
    </VStack>
  )
}

export default Shop