import React from 'react'
import Filters from '../modules/Filters/Filters'
import { HStack, VStack, Heading} from '@chakra-ui/react'
import Store2 from '../modules/Store/Store2'
import MorePages from '../modules/MorePages/MorePages';
const Shop2 = (props) => {
  
  return (
    <VStack w="100%">
      <HStack w="100%" alignItems="center" bg="black" color="white">
        <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                 p="2em"
                >All Products</Heading>
      </HStack>
      <HStack w="100%">
        <Filters/>
        <Store2/>
      </HStack>
      <MorePages/>
    </VStack>
  )
}

export default Shop2