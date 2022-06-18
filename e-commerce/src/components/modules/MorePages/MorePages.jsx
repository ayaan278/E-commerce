import React from 'react'
import { Center, HStack , Link} from '@chakra-ui/react'
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
        </HStack>
    </Center>
  )
}

export default MorePages