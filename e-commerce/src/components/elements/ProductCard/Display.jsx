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
            <Container p="1em">
                <VStack id={tags}>
                    <HStack>
                        <Image
                         border="1.5px solid black"
                         objectFit="fill"
                         borderRadius="md"
                         src={image}
                         alt="pic 2"/>
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