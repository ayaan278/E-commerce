import React from 'react'
import { Center, Container, 
    HStack, VStack, 
    Heading, Button,  
    Divider, 
    TableContainer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,} from '@chakra-ui/react'
import Billing from '../modules/Billing/Billing'
import CheckoutTable from '../modules/CheckoutTable/CheckoutTable'
import { Player } from '@lottiefiles/react-lottie-player'
import Thankyou from '../../assets/Lottie/Thankyou.json'
const Checkout = () => {

  return (
    <Center pt="3em">
        <Container maxW="container.xl">
            <HStack>
                <VStack w="50%" h="520px">
                    <HStack>
                        <Heading>Billing Details</Heading>
                    </HStack>
                    <Billing/>
                </VStack>
                <Center height='20em'>
                    <Divider orientation='vertical' />
                </Center>
                <VStack w="50%" h="520px">
                    <HStack>
                        <Heading>Your order Summary</Heading>
                    </HStack>
                    <TableContainer pt="2em">
                        <CheckoutTable/>
                    </TableContainer>
                    <Popover pt="2em">
                        <PopoverTrigger>
                            <Button size="lg" w="200px"
                                    bg="black" color="white"
                                    >
                                Place Order
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <HStack 
                                pt="2em"
                                h={{base: '100px', md: '100px', lg: '100px'}}>
                                <Player autoplay
                                        controls
                                        loop
                                        mode="normal"
                                        src={Thankyou}></Player>
                                </HStack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    
                </VStack>
            </HStack>
        </Container>
    </Center>
  )
}

export default Checkout