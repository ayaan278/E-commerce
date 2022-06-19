import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { 
  Container, 
  Center, 
  HStack,
  VStack,
  Image, 
  Heading,
  Show,
} from '@chakra-ui/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
// import Swip from '../../elements/Swiper/Swip';
import SignupForm from '../../elements/SignupForm/SignupForm'
import ChakraIcon from '../../elements/ChakraIcon/ChakraIcon'
import 'swiper/css';
import sofa1 from '../../../assets/Pictures/sofa1.jpeg'
import sofa2 from '../../../assets/Pictures/sofa2.jpg'
import chair1 from '../../../assets/Pictures/chair1.jpg'
import chair2 from '../../../assets/Pictures/chair2.jpg'
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

// const styles = StyleSheet.create({
//   swiper: {
//     width: '100%',
//   },
// });


const SwiperBox = (props) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Center pt={{base: '0', md: '2em', lg: '6em'}} 
            position="relative" pb={{base: '0', md: '7em', lg: '20em'}}>
      <Container maxW="container.xl">
        <HStack pt={{base: '0', md: '10em', lg: '15em'}} 
                h="300px"  w={{base: '350px', md: '750px', lg: '1250px'}}>
          <Swiper
            spaceBetween={180}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
    
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            className="mySwiper"
            style={{
              width: '90%',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
            }}>
              <Show breakpoint='(min-width: 400px)'>
                <VStack top={{base: '0', md: '10%', lg: '20%'}} 
                        left="30%"
                        p={[2, 15]}
                        w={[ 150, 250, 300, 400, 500]}
                        position="absolute" 
                        color="white" 
                        zIndex="1"
                        gap="1em"
                        bg= "rgba(42, 37, 75,0.5)" >
                  <Heading  
                    fontSize={{base: 'md',md: 'xl',lg: '3xl'}}  >
                    Join the club and get the benefits</Heading><br></br>
                  <Heading 
                    fontSize={{base: 'sm',md: 'md',lg: 'xl'}}
                    fontWeight="450">
                    Sign up for our newsletter and receive exclusive offers <br></br>
                    on new ranges, sales, pop up stores and more</Heading>
                  <Heading 
                    fontSize={{base: 'xsm',md: 'md',lg: 'lg'}}
                    fontWeight="350">
                    Exclusive offers Free events Large discounts</Heading>
                    
                  <SignupForm/>
                </VStack>
              </Show>
              
            
            <SwiperSlide>
              <Image 
              objectFit="contain"
              borderRadius="md"
              src={sofa1}
              alt="pic 1" />
            </SwiperSlide>
            <SwiperSlide >
              <Image 
              objectFit="fill"
              borderRadius="md"
              src={chair1}
              alt="pic 2" />
            </SwiperSlide>
            <SwiperSlide >
              <Image 
              objectFit="fill"
              borderRadius="md"
              src={sofa2}
              alt="pic 2" />
            </SwiperSlide>
            <SwiperSlide >
              <Image 
              objectFit="fill"
              borderRadius="md"
              src={chair2}
              alt="pic 2" />
            </SwiperSlide>
            

            <ChakraIcon
              ref={navigationPrevRef}
              name={<ChevronLeftIcon />}
              flag={1}/>
            <ChakraIcon
              ref={navigationNextRef}
              name={<ChevronRightIcon />} />
          </Swiper>
        </HStack> 
      </Container>
    </Center>
    
  )
}

export default SwiperBox