import React from 'react'
import { Center, Container, HStack , Link} from '@chakra-ui/react'
import Pages from '../../elements/Buttons/Pages'
const MorePages = () => {
  return (
    <Center>
        <HStack>
            <Link href="/shop">
            <Pages number="1" />
            </Link>
            <Link href="/shop-02">
            <Pages number="2"/>
            </Link>
            <Link href="/shop-03">
            <Pages number="3"/>
            </Link>
        </HStack>
    </Center>
  )
}

export default MorePages