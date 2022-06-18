import React from 'react'
import { Center, Container, HStack, VStack, Image, Heading, Button} from '@chakra-ui/react'
import { useCart } from "react-use-cart";

const Basket = (props) => {
  
    const { addItem } = useCart();
    return (
    <Center>
        <Container maxW="container.lg">
            <VStack pt="2em"
                    h={{base: '120px', md: '150px', lg: '300px'}}
                    >
                <HStack >
                    <Image
                        h="200px"
                        w="150px"
                        objectFit="fill"
                        borderRadius="md"
                        src={props.image}
                        alt="product image"/>
                </HStack>
                <VStack>
                    <Heading align="center"
                        fontSize={{base: 'lg',md: 'xl',lg: '2xl'}} 
                        fontWeight={450}>
                        {props.title}
                    </Heading>
                    <Heading
                        fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                        fontWeight={400}>
                        {props.price}
                    </Heading>
                </VStack>
                <HStack justify={'right'} key={props.id}>
                    <Button size="sm"
                        onClick={() => addItem(props.item)}
                        >Add to Cart</Button>
                </HStack>
            </VStack>
        </Container>
    </Center>
  )
}

export default Basket