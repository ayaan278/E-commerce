import React from 'react'
import { Center , Container, SimpleGrid, Spacer, } from '@chakra-ui/react'
import Products from '../Products/Products'
import Basket from '../../elements/ProductCard/Basket'
const Store = () => {
  return (
    <Center>
        <Container maxW="container.xl">
            <SimpleGrid columns={4} spacing={5}>
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