import React from 'react'
import { 
    Container, 
    Center, 
    Stack,
    VStack,
    Heading,
    Image, Box
  } from '@chakra-ui/react';
import chair4 from '../../../assets/Pictures/chair4.jpg'
import ViewCollection from '../../elements/Buttons/ViewCollection';
const HomepageHero = () => {
  return (
    <Center w="100%" pt="2em" color="white">
        <Container maxW="container.xl">
            <Stack bg="teal" direction={[ 'column', 'row']}>
                <VStack w="60%" pos="relative"> 
                    <Box p="4em" float="left">
                        <Heading fontSize="3xl" fontWeight="600"  >The furniture brand for the future, 
                            with timeless designs</Heading>
                    </Box>
                    <Box pos="absolute" top="60" left="20">
                        <ViewCollection />  
                    </Box>
                    <Box pt="8em" pl="5em" pr="5em">
                        <Heading fontSize="md" fontWeight="350">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally 
                                using modern web technologies.</Heading>
                    </Box>
                </VStack>
                <VStack w="40%">
                    <Image
                    objectFit="contain"
                    borderRadius="md"
                    src={chair4}
                    alt="chair4" />
                </VStack>
            </Stack>
        </Container>
    </Center>
  )
}

export default HomepageHero