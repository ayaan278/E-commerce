import React from 'react'
import { 
    Container, 
    Center, 
    HStack,
    VStack,
    Heading,
    Image
  } from '@chakra-ui/react';
import GetInTouch from '../../elements/Buttons/GetInTouch'
import bed1 from "../../../assets/Pictures/bed1.jpg"
import office1 from "../../../assets/Pictures/office1.jpg"
const AboutHero = () => {
  return (
    <Center w="100%">
        <Container maxW="container.xl">
            <VStack w="100%">
                <HStack pt="5em">
                    <Heading align="center">A brand built on the love of craftmanship,
                            quality and outstanding customer service</Heading>
                </HStack>
                <HStack w="100%" pt="2em">
                    <VStack w="50%" p="3em">
                        <Heading fontSize="2xl" fontWeight="550">Started with an apartment now have 5 outlets.</Heading><br></br>
                        <Heading fontSize="md" fontWeight="350">When we started E-commerce company, the idea was simple. Make high quality furniture affordable 
                            and available for the mass market. Handmade, and lovingly crafted furniture 
                            and homeware is what we live, breathe and design so our Chelsea boutique become 
                            the hotbed for the interior design community.</Heading>
                        <GetInTouch/>
                    </VStack>
                    <VStack w="50%">
                        <Image
                        objectFit="contain"
                        borderRadius="md"
                        src={bed1}
                        alt="bed1" />
                    </VStack>
                </HStack>
                <HStack >
                    <VStack w="50%" >
                    <Image
                        objectFit="contain"
                        borderRadius="md"
                        src={office1}
                        alt="office1" />
                    </VStack>
                    <VStack w="50%" p="3em">
                    <Heading fontSize="2xl" fontWeight="550">Our service isn’t just personal, it’s actually hyper personally exquisite</Heading><br></br>
                        <Heading fontSize="md" fontWeight="350">When we started E-commerce company, the idea was simple. 
                            Make high quality furniture affordable and available for the mass market. 
                            Handmade, and lovingly crafted furniture and homeware is what we live, 
                            breathe and design so our Chelsea boutique become the hotbed for the interior design community.</Heading>
                    <GetInTouch />
                    </VStack>
                </HStack>
            </VStack>
        </Container>
    </Center>
  )
}

export default AboutHero