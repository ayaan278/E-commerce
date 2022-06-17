import React from 'react'
import { VStack, HStack, Heading } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
// import { TbTruckDelivery, TbPlant } from "react-icons/tb"
// import { GoCreditCard } from "react-icons/go"
// import { FcApproval } from "react-icons/fc"
const InfoCard = (props) => {
    const { title, icon, description } = props;

    return (
    <VStack
        p="0.5em"
        background="#ffffff"
        gap="3px"
        borderRadius={'16px'}
        alignItems="left"
        pl={3}
        w={{base: '170px', md: '180px', lg:'280px'}}
        h={[250, 275, 300]}
        overflow="hidden">
        <HStack pt="0.5em" fontSize={{base: '16px', md: '24px', lg: '30px'}}>
              {icon}
        </HStack>
        <HStack>
            <Heading fontSize={{base: 'md',md: 'lg',lg: 'xl'}} fontWeight={550} pt="10px">
                {title}
            </Heading>
        </HStack>
        <HStack>
            <Heading fontSize={{base: 'sm',md: 'md',lg: 'l'}} fontWeight={400} pr={5}>
                {description}
            </Heading>
        </HStack>
    </VStack>
    )
}

InfoCard.defaultProps = {
    icon: <AddIcon/>,
    title: "",
    description: ""
}
export default InfoCard