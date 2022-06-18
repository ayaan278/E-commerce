import React from 'react'
import { Center, Container, HStack, VStack, Image, Heading, Button} from '@chakra-ui/react'
import { useCart } from "react-use-cart";
const Basket = (props) => {
    const { image, title, price } = props;
    const { addItem } = useCart();
    return (
    <Center>
        <Container maxW="container.lg">
            <VStack h={{base: '120px', md: '150px', lg: '400px'}}>
                <HStack >
                    <Image
                        objectFit="fill"
                        borderRadius="md"
                        src={image}
                        alt="product image"/>
                </HStack>
                <VStack>
                    <Heading align="center"
                        fontSize={{base: 'lg',md: 'xl',lg: '2xl'}} 
                        fontWeight={450}>
                        {title}
                    </Heading>
                    <Heading
                        fontSize={{base: 'sm',md: 'md',lg: 'lg'}} 
                        fontWeight={400}>
                        {price}
                    </Heading>
                </VStack>
                <HStack justify={'right'}>
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