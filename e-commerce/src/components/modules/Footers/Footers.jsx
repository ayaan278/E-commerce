import { Button, Heading, Flex, Link, HStack, VStack, Stack } from '@chakra-ui/react';
import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import SignupForm from '../../elements/SignupForm/SignupForm'
const Footers = () => {
  return (
    <Flex 
    position= 'relative'
    wrap="wrap"
    w="100%"
    // pt={[70, 100, 250, 350]}
    pt="2em"
    as="footer" 
    color='white'>
      {/* <Container maxW="container.2xl"> */}
        <Stack bg="#2A254B"  p="2em" pl="3em" w="100%" direction={[ 'column', 'row']}>
          <HStack w={[300, 400, 500, 600]}>

            <VStack gap="5px" alignItems={'flex-start'} w="50%" >
              <Heading color="white" size='md'>Menu</Heading>
              <Link href="/coming-soon">
                <span>
                  All Products
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Top Seller
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Popular Products
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  New Arrivals
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Recently viewed
                </span>
              </Link>
            </VStack>

            <VStack gap="5px" alignItems={'flex-start'} w="50%" >
              <Heading size='md'>Our Company</Heading>
              <Link href="/about">
                <span>
                  About Us
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Vacancies
                </span>
              </Link>
              <Link href="/contact">
                <span>
                  Contact Us
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Privacy Policy
                </span>
              </Link>
              <Link href="/coming-soon">
                <span>
                  Terms and Conditions
                </span>
              </Link>
            </VStack>
          </HStack>

          <HStack  alignItems={'flex-start'} w={[400, 500]}>
            <SignupForm/>
          </HStack>
        </Stack>

        <HStack w="100%" bg="black">
          <HStack w={{base: '50%',md: '50%',lg: '60%'}} >
            <Heading fontSize={{base: 'xs',md: 'xs',lg: 'sm'}} pl="2em"> Copyright &copy; Ayaan Ahmad</Heading>
          </HStack>

          <HStack w={{base: '50%',md: '50%',lg: '40%'}} gap="1em" p="1em">
            <Link href="">
              <span size='md' class="inline-block h-12 w-12 rounded-full ring-white">
                <FaFacebook  style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="">
              <span size='md' class="inline-block h-12 w-12 ring-white" >
                <FaInstagram style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="">
              <span size='md' class="inline-block h-12 w-12 ring-white">
                <FaGithub  style={{fontSize: '30px'}}/>
              </span>
            </Link>
            <Link href="">
              <span size='md' class="inline-block h-12 w-12 ring-white">
                <FaLinkedin style={{fontSize: '30px'}}/>
              </span>
            </Link>
          </HStack>
        </HStack>

      {/* </Container> */}
    </Flex>
  )
}

export default Footers