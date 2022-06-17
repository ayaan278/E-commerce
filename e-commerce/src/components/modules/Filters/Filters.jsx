import React from 'react'
import { Center, Container, VStack, Heading, Checkbox, CheckboxGroup, } from '@chakra-ui/react'

const Filters = () => {
  return (
    <Center p="2em">
        <Container maxW="container.lg">
            <VStack gap="1em">
                <VStack>
                    <Heading fontSize={{base: 'md',md: 'xl',lg: '2xl'}}
                            p="0.5em"
                                >Product type</Heading>
                    <CheckboxGroup >
                        <VStack alignItems="left">
                            <Checkbox >Chairs</Checkbox>
                            <Checkbox >Table</Checkbox>
                            <Checkbox>Light fittings</Checkbox>
                            <Checkbox>Vase</Checkbox>
                            <Checkbox>Sofa</Checkbox>
                            <Checkbox>Furniture Set</Checkbox>
                        </VStack>
                    </CheckboxGroup>
                </VStack>
                <VStack>
                    <Heading fontSize={{base: 'md',md: 'xl',lg: '2xl'}}
                            p="0.5em">Price</Heading>
                    <CheckboxGroup >
                        <VStack alignItems="left">
                            <Checkbox >$ 0 - 100</Checkbox>
                            <Checkbox >$ 101 - 200</Checkbox>
                            <Checkbox >$ 201 - 300</Checkbox>
                            <Checkbox >$ 301 + </Checkbox>
                        </VStack>
                    </CheckboxGroup>
                </VStack>
            </VStack>
        </Container>
    </Center>
  )
}

export default Filters