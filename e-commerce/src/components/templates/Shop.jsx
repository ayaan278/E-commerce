import React from 'react'
import Filters from '../modules/Filters/Filters'
import { HStack, VStack, Heading, Show} from '@chakra-ui/react'
import Store from '../modules/Store/Store'
const Shop = (props) => {
  
  return (
    <VStack w="100%" pb="2em">
      <HStack w="100%" alignItems="center" bg="black" color="white">
        <Heading fontSize={{base: 'lg',md: '2xl',lg: '3xl'}}
                 p="2em"
                >All Products</Heading>
      </HStack>
      <HStack w="100%"  justify="initial">
      <Show breakpoint='(min-width: 500px)'>
        <VStack w={{base: null, sm: null, md: '20%', lg: '25%'}}>
            <Filters/>
        </VStack>
      </Show>
        <VStack w={{base: '100%', md: '80%', lg: '75%'}}>
          <Store/>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Shop