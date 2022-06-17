import React from 'react'
import InfoCard from '../../elements/InfoCard/InfoCard'
import { Center, Container, Stack, HStack, Heading} from '@chakra-ui/react';
import { TbTruckDelivery, TbPlant } from "react-icons/tb"
import { GoCreditCard } from "react-icons/go"
import { FcApproval } from "react-icons/fc"
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

// const breakpoints = {
//     sm: '30em',
//     md: '48em',
//     lg: '62em',
//     xl: '80em',
//     '2xl': '96em',
//   }
const InfoDivider = () => {
  return (
    <Center pt="3em">
        <Container maxW="container.xl" bg="#2A254B">
            <Heading    fontSize={{base: 'md',md: 'lg',lg: '2xl'}} 
                        fontWeight={700} 
                        ml={5}
                        color="white"
                        pt="2em"
                        pl="1em">
                What Makes Our Brand Different
            </Heading> 
            <Stack p="2em" justify="center"
            direction={[ 'column', 'row']}>
                <HStack>
                    <InfoCard 
                        icon={<TbTruckDelivery/>}
                        title="Delivery Next Day" 
                        description="Order before 3pm and get your order the enxt day as standard"/>
                    <InfoCard 
                        icon={<FcApproval/>}
                        title="Made by true artisans" 
                        description="Handmade crafted goods made with real passion and craftsmanship"/>
                </HStack>
                <HStack>
                <InfoCard 
                    icon={<GoCreditCard/>}
                    title="Unbeatable prices" 
                    description="For our materials and quality you won't find better prices anywhere"/>
                <InfoCard 
                    icon={<TbPlant/>}
                    title="Recycled Packaging" 
                    description="We use 100% recycled packaging to ensure our footprint is manageable"/>
                </HStack>
            </Stack>
        </Container>
    </Center>
  )
}

export default InfoDivider