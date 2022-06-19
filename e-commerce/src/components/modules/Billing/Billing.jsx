import React from 'react'
import { 
    HStack,
    FormControl, FormLabel,
    Input, InputGroup } from '@chakra-ui/react'

const Billing = () => {
  return (
    <HStack pt="2em">
        <FormControl>
        <FormLabel htmlFor='name' >Name</FormLabel>
            <InputGroup>
            <Input w={{base: '250px', md: '250px', lg: '300px'}}
                bg="#F8F8F8" color="black"
                type="text"
                placeholder="Enter Full Name"
            />
            </InputGroup>
        <FormLabel htmlFor='email' >Email address</FormLabel>
            <InputGroup>
            <Input w={{base: '250px', md: '250px', lg: '300px'}}
                    id='email' type='email' 
                    bg="#F8F8F8" color="black" 
                    placeholder="Enter email address"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
            </InputGroup>
        <FormLabel htmlFor='contact' >Contact</FormLabel>
            <InputGroup>
            <Input w={{base: '250px', md: '250px', lg: '300px'}}
                    id='email' type='number' 
                    bg="#F8F8F8" color="black" 
                    placeholder="Enter contact number"
                    />
            </InputGroup>
        <FormLabel htmlFor='Address' >Address</FormLabel>
            <InputGroup>
            <Input w={{base: '250px', md: '250px', lg: '300px'}}
                    id='email' type='text' 
                    bg="#F8F8F8" color="black" 
                    placeholder="Enter House Number/Flat Number"
                    />
            </InputGroup>
            <InputGroup pt="0.5em">
            <Input w={{base: '250px', md: '250px', lg: '300px'}}
                    id='email' type='text' 
                    bg="#F8F8F8" color="black" 
                    placeholder="Enter Street/Building/Area"
                    />
            </InputGroup>
        </FormControl>
    </HStack>
  )
}

export default Billing