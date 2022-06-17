import React from 'react'
import { Center, Container, HStack, VStack, Image, Heading } from '@chakra-ui/react'

const Basket = (props) => {
    const { image, title, price, description } = props;
    
    return (
    <Center>
        <Container>
            <HStack>
                <VStack>
                <Image
                    objectFit="fill"
                    borderRadius="md"
                    src={image}
                    alt="pic 2"/>
                </VStack>
                <VStack>
                    <Heading 
                        fontSize={{base: 'lg',md: 'xl',lg: '2xl'}} 
                        fontWeight={500}>
                        {title}
                    </Heading>
                    <Heading 
                        fontSize={{base: 'md',md: 'lg',lg: 'xl'}} 
                        fontWeight={300}>
                        {description}
                    </Heading>
                    <Heading
                        fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                        fontWeight={400}>
                        {price}
                    </Heading>
                </VStack>
            </HStack>
        </Container>
    </Center>
  )
}

export default Basket