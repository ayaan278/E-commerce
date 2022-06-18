import React from 'react'
import { Center , Container, Stack, HStack, VStack } from '@chakra-ui/react'
import Basket from '../../elements/ProductCard/Basket'
import chair1 from '../../../assets/Products/Chair1.jpg'
import vase1 from '../../../assets/Products/Vase1.jpg'  
import vase2 from '../../../assets/Products/Vase2.jpg'
import lamp1 from '../../../assets/Products/Lamp1.jpg'
import sofa1 from '../../../assets/Products/Sofa1.jpg'
import sofa2 from '../../../assets/Products/Sofa2.jpg'
import Fur1 from '../../../assets/Products/Fur1.jpg'
import Fur2 from '../../../assets/Products/Fur2.jpg'
import Fur3 from '../../../assets/Products/Fur3.jpg'
const Store2 = () => {
  return (
    <Center>
        <Container maxW="container.xl">
        <Stack p="2em" 
            align="center"
            direction={[ 'column', 'row']}>
                <VStack >
                    <HStack>
                        <Basket image={Fur3} title="The Wooden Platinum" price="350$" tags="furniture"/>
                        <Basket image={vase1} title="The Hula Vase" price="50$" tags="vase"/>
                    </HStack>
                    <HStack>
                        <Basket image={lamp1} title="The Trinker Lamp" price="70$" tags="lights"/>
                        <Basket image={vase2} title="Rustic Vase set" price="100$" tags="vase"/>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack>
                        <Basket image={sofa1} title="Grey Rust Sofa" price="450$" tags="sofa"/>
                        <Basket image={Fur1} title="Two birds furniture" price="200$" tags="furniture"/>
                    </HStack>
                    <HStack>
                        <Basket image={sofa2} title="Velvet Sofa" price="150$" tags="sofa"/>
                        <Basket image={Fur2} title="Rust furniture set" price="200$" tags="furniture"/>
                    </HStack>
                </VStack>
            
            </Stack>
        </Container>
    </Center>
  )
}

export default Store2