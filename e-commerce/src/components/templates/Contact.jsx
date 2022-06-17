import React from 'react'
import { Center, Container, HStack, VStack, Heading} from '@chakra-ui/react'
import { MdOutlineLocationOn, MdCall, MdEmail } from "react-icons/md";
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
      </Container>
    </Center>
  )
}

export default Contact