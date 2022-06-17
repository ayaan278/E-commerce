import React from 'react'
import { Center, Container, HStack, VStack, Heading } from '@chakra-ui/react'

const Checkout = () => {
  return (
    <Center pt="3em">
        <Container maxW="container.xl">
            <HStack>
                <VStack>
                    <HStack>
                        <Heading>Your shopping cart</Heading>
                    </HStack>
                    <HStack>
                        
                    </HStack>
                </VStack>
            </HStack>
        </Container>
    </Center>
  )
}

export default Checkout