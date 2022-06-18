import React from 'react'
import { Center, Container, HStack, VStack, Heading} from '@chakra-ui/react'
import { MdOutlineLocationOn, MdCall, MdEmail } from "react-icons/md";
import { Player } from '@lottiefiles/react-lottie-player';
import Furniture from '../../assets/Lottie/Furniture.json'
const Contact = () => {
  return (
    <Center pt="3em">
      <Container maxW="container.xl">
        <HStack justifyContent="center" p="2em" color="white" gap="1em">
          <VStack w="30%" h="20em" 
                  bg="#00A3C4" p="2em"
                  borderRadius={'md'}
                  >
            <MdOutlineLocationOn fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Registered Address</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}}
                    fontWeigth="450px"></Heading>
          </VStack>
          <VStack w="30%" h="20em" 
                  bg="#00A3C4" p="2em"
                  borderRadius={'md'}>
            <MdCall fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Get in Touch</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}}
                    fontWeigth="450px"></Heading>
          </VStack>
          <VStack w="30%" h="20em" 
                  bg="#00A3C4" p="2em"
                  borderRadius={'md'}>
            <MdEmail fontSize="26px"/>
            <Heading fontSize={{base: "xl", md: "2xl", lg: "3xl"}} pt="0.5em"
                    fontWeigth="650px">Mail US</Heading>
            <Heading fontSize={{base: "md", md: "lg", lg: "2xl"}} pt="1em"
                    fontWeigth="450px">ayaanishere08@gmail.com</Heading>
          </VStack>
        </HStack>
        <VStack justifyContent="center" p="2em">
                <Heading>Build your Perfect Home with us</Heading>
                <HStack p="1em" 
                        w={{base: '500px', md: '600px', lg: '1000px'}}
                        h={{base: '300px', md: '400px', lg: '500px'}}
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