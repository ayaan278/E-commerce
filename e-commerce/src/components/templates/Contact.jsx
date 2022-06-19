import React from 'react'
import { Center, Container, Stack, HStack, VStack, Heading} from '@chakra-ui/react'
import { MdOutlineLocationOn, MdCall, MdEmail } from "react-icons/md";
import { Player } from '@lottiefiles/react-lottie-player';
import Furniture from '../../assets/Lottie/Furniture.json'
const Contact = () => {
  return (
    <Center pt="3em">
      <Container maxW="container.xl">
        <Stack justifyContent="center" direction={[ 'column', 'row']}
                p="2em" color="white" gap="1em">
          <VStack w={{base: '100%', md: '33.3%', lg: '30%'}} 
                  h={{base: '10em', md: '15em', lg: '20em'}}
                  bg="#00A3C4" p={{base: '1em', md: '1em', lg: '2em'}}
                  borderRadius={'md'}
                  >
            <MdOutlineLocationOn fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Registered Address</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}} pt="1em"
                    fontWeigth="450px">Cyberjaya, Malaysia</Heading>
          </VStack>
          <VStack w={{base: '100%', md: '33.3%', lg: '30%'}} 
                  h={{base: '10em', md: '15em', lg: '20em'}}
                  bg="#00A3C4" p={{base: '1em', md: '1em', lg: '2em'}}
                  borderRadius={'md'}>
            <MdCall fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Get in Touch</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}} pt="1em"
                    fontWeigth="450px">011255991394</Heading>
          </VStack>
          <VStack w={{base: '100%', md: '33.3%', lg: '30%'}} 
                  h={{base: '10em', md: '15em', lg: '20em'}}
                  bg="#00A3C4" p={{base: '1em', md: '1em', lg: '2em'}}
                  borderRadius={'md'}>
            <MdEmail fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Mail US</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}} pt="1em" 
                    fontWeigth="450px" align="center">ayaanishere08<br></br>@gmail.com</Heading>
          </VStack>
        </Stack>
        <VStack justifyContent="center" p="2em">
                <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Build your Perfect Home with us</Heading>
                <HStack p="1em" 
                        w={{base: '100%', md: '80%', lg: '80%'}}
                        // h={{base: '300px', md: '600px', lg: '500px'}}
                        justifyContent="center">
                        <Player autoplay
                                controls
                                loop
                                mode="normal"
                                src={Furniture}>
                        </Player>
                </HStack>
        </VStack>
      </Container>
    </Center>
  )
}

export default Contact