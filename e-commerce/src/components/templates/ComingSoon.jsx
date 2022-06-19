import React from 'react'
import { HStack } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player';
import Soon from '../../assets/Lottie/Soon.json'
const ComingSoon = () => {
  return (
    <HStack justify="center"
            align="center"
            w="100%"
            h={{base: '300px', md: '400px', lg: '500px'}}
            pt={{base: '2em', md: '3em', lg: '5em'}}>  
        <Player
            autoplay
            controls
            loop
            mode="normal"
            src={Soon}
            >
        </Player>
    </HStack>
    
  )
}

export default ComingSoon