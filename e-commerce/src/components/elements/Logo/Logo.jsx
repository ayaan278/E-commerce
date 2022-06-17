import React from 'react'
import {HStack, Image, Heading} from '@chakra-ui/react'
import logo from '../../../assets/favicon_io/favicon-32x32.png'

const Logo = () => {
  return (
    <HStack w="100%">
        <Image  src={logo}
                alt='E-commerce Logo'
            />
        <Heading fontSize="lg">E-commerce</Heading>
    </HStack>
  )
}

export default Logo