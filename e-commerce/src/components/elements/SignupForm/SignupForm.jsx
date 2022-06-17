import React from 'react'
import { 
    HStack,
    VStack,
    Input, 
    Button,
    Heading,
} from '@chakra-ui/react';
const SignupForm = () => {
  return (
    <VStack p="5px">
    <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}} fontWeight="450">Join our mailing list</Heading>
    <HStack w={[170, 200, 250, 300, 400]}>
        <Input variant='filled' placeholder='your@email.com' />
        <Button colorScheme='#494565' >
            Submit
        </Button>
    </HStack>
    </VStack>
  )
}

export default SignupForm