import React from 'react'
import { IconButton } from '@chakra-ui/react';

const ChakraIcon = (props) => {
  const name = props.name;
  const ref = props.ref;
  const flag = props.flag;
  if(flag!=1){
    return (
      <IconButton
            ref={ref}
            aria-label="Next Slide"
            icon={name}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
              zIndex: 1001,
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0px 0px 10px #e9e9e9',
            }}
          />
    )
  }
  else{
    return (
      <IconButton
            ref={ref}
            aria-label="Next Slide"
            icon={name}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '10px',
              zIndex: 1001,
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              boxShadow: '0px 0px 10px #e9e9e9',
            }}
          />
    )
  }
}

export default ChakraIcon