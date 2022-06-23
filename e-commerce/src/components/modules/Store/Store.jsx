import React from 'react'
import { Center , Container, SimpleGrid, Spacer, } from '@chakra-ui/react'
import Products from '../Products/Products'
import Basket from '../ProductCard/Basket'
const Store = () => {

  return (
    <Center>
        <Container maxW="container.xl">
          
            <SimpleGrid columns={[2, 3, 4]} spacing={[null, null, 5]}>
                {Products.data.map((item, index) => {
                    return (
                    <Basket
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        item={item}
                        key={index}
                    />
                    );
                })}
                <Spacer/>
                </SimpleGrid>
        </Container>
    </Center>
  )
}

export default Store