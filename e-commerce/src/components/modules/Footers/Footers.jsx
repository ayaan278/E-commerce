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
              <Link>
                <span>
                  All Products
                </span>
              </Link>
              <Link>
                <span>
                  Top Seller
                </span>
              </Link>
              <Link>
                <span>
                  Popular Products
                </span>
              </Link>
              <Link>
                <span>
                  New Arrivals
                </span>
              </Link>
              <Link>
                <span>
                  Recently viewed
                </span>
              </Link>
            </VStack>

            <VStack gap="5px" alignItems={'flex-start'} w="50%" >
              <Heading size='md'>Our Company</Heading>
              <Link>
                <span>
                  About Us
                </span>
              </Link><Link>
                <span>
                  Vacancies
                </span>
              </Link><Link>
                <span>
                  Contact Us
                </span>
              </Link><Link>
                <span>
                  Privacy Policy
                </span>
              </Link><Link>
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
          <HStack w="60%" >
            <Heading fontSize={{base: 'xs',md: 'xs',lg: 'sm'}} pl="2em"> Copyright &copy; Ayaan Ahmad</Heading>
          </HStack>

          <HStack w="40%" gap="1em" pt="1em">
            <Link>
            <span size='md' class="inline-block h-12 w-12 rounded-full ring-white">
              <FaFacebook  style={{fontSize: '30px'}}/>
            </span>
            <span size='md' class="inline-block h-12 w-12 ring-white" >
              <FaInstagram style={{fontSize: '30px'}}/>
            </span>
            <span size='md' class="inline-block h-12 w-12 ring-white">
              <FaGithub  style={{fontSize: '30px'}}/>
            </span>
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