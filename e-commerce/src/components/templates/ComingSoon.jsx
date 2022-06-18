import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Soon from '../../assets/Lottie/Soon.json'
const ComingSoon = () => {
  return (
    <>  
        <Player
            autoplay
            controls
            loop
            mode="normal"
            src={Soon}
            style={{ height: '300px', width: '800px' }}
            >
        </Player>
    </>
    
  )
}

export default ComingSoon