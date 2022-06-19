import React from 'react'
import { Center, 
    Container, 
    Stack,
    VStack, 
    HStack, 
    Heading } from '@chakra-ui/react';
import ViewCollection from '../../elements/Buttons/ViewCollection'
import Display from '../ProductCard/Display'
import chair1 from '../../../assets/Products/Chair1.jpg'
import vase1 from '../../../assets/Products/Vase1.jpg'  
import vase2 from '../../../assets/Products/Vase2.jpg'
import lamp1 from '../../../assets/Products/Lamp1.jpg'
const Collections = () => {
  return (
    <Center p={{base: '0.25em', md: '1.5em', lg: '3em'}}>
        <Container maxW="container.xl">
            <VStack >
                <Heading
                    fontSize={{base: 'lg',md: '2xl',lg: '3xl'}} 
                    fontWeight={700} 
                    ml={5}>Our Popular Products</Heading>
                <Stack p={"2em"}
                    align="center"
                    direction={[ 'column', 'row']}>
                    <HStack>
                        <Display image={chair1} title="The Dandy Chair" price="200$"/>
                        <Display image={vase1} title="The Hula Vase" price="50$"/>
                    </HStack>
                    <HStack>
                        <Display image={lamp1} title="The Trinker Lamp" price="70$"/>
                        <Display image={vase2} title="Rustic Vase set" price="100$"/>
                    </HStack>
                </Stack>
                <ViewCollection/>
            </VStack>
        </Container>
    </Center>
  )
}

export default Collections