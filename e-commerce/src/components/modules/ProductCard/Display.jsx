import React, { useState } from 'react'
import { Center, 
    Container, 
    Stack,
    VStack, 
    HStack, 
    Heading,
    Image 
} from '@chakra-ui/react';
const Display = (props) => {
    const [tags] = useState(null)
    const { image, title, price } = props;

    return (
        <Center>
            <Container p={{base: '0', md: '1em', lg: '1em'}} maxW="container.lg">
                <VStack id={tags}>
                    <HStack>
                        <Image
                         border="1.5px solid black"
                         objectFit="fill"
                         borderRadius="md"
                         src={image}
                         alt="product"/>
                    </HStack>
                    <VStack m="1em">
                        <Heading 
                            fontSize={{base: 'md',md: 'lg',lg: 'xl'}} 
                            fontWeight={500}>
                            {title}
                        </Heading>
                        <Heading
                            fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                            fontWeight={300}>
                            {price}
                        </Heading>
                    </VStack>
                </VStack>
            </Container>
        </Center>
    )
}

export default Display