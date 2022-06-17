import React from 'react'
import { VStack, Button } from '@chakra-ui/react'

const Pages = (props) => {
    const {number} = props
  return (
    <VStack>
        <Button>
            {number}
        </Button>
    </VStack>
  )
}

export default Pages