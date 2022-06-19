import React from 'react'
import { Center, Container, HStack, VStack, Image, Heading, Button} from '@chakra-ui/react'
import { useCart } from "react-use-cart";

const Basket = (props) => {
  
    const { addItem } = useCart();
    return (
    <Center>
        <Container maxW="container.lg">
            <VStack pt={{base: '6em', md: '5em', lg: '2em'}}
                    h={{base: '250px', md: '300px', lg: '350px'}}
                    >
                <HStack >
                    <Image
                        h={{base: '120px', md: '120px', lg: '200px'}}
                        w={{base: '100px', md: '100px', lg: '150px'}}
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
                    <Button size={{base: 'xs', md: 'sm', lg: 'sm'}}
                        onClick={() => addItem(props.item)}
                        >Add to Cart</Button>
                </HStack>
            </VStack>
        </Container>
    </Center>
  )
}

export default Basket