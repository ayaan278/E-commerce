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
                <VStack w={{base: '350px', md: '550px', lg: '60%'}} pos="relative" > 
                    <Box p={{base: '2em', md: '3em', lg: '4em'}} float="left">
                        <Heading fontSize={{base: 'xl', md: '2xl', lg: '3xl'}} 
                                fontWeight="600"  
                                align="center">The furniture brand for the future, 
                            with timeless designs</Heading>
                    </Box>
                    <Box align="center">
                        <ViewCollection />  
                    </Box>
                    <Box pt={{base: "3em", md: "4em", lg: "8em"}} 
                        pl={{base: "2em", md: "3em", lg: "5em"}}
                        pr={{base: "2em", md: "3em", lg: "5em"}}
                        pb={{base: "2em", md: "2em", lg: "3em"}}>
                        <Heading fontSize="md" fontWeight="350"
                                    align="center">A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally 
                                using modern web technologies.</Heading>
                    </Box>
                </VStack>
                <VStack justify="center" p={{base: '0', md: '1.5em', lg: '0'}}
                    w={{base: '100%', md: '600px', lg: '40%'}}>
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