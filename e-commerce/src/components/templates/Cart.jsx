import React from 'react'
import ShowCart from '../modules/ProductCard/ShowCart';
import { HStack, Heading} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player'
import Shopping from '../../assets/Lottie/Shopping.json'
const Cart = () => {
  return (
    <> 
      <HStack justify={'center'}
              pt="2em">
          <HStack>
            <Heading>Your shopping cart</Heading>
          </HStack>
          <HStack 
            pt="2em">
            <Player autoplay
                    controls
                    loop
                    mode="normal"
                    src={Shopping}
                    style={{width: '200px', height: '100px'}}></Player>
            </HStack>
      </HStack>
      <ShowCart/>
    </>
  );
}

export default Cart