import React from 'react'
import { Divider } from '@chakra-ui/react';
import HomepageHero from '../modules/Hero/HomepageHero'
import SwiperBox from '../modules/SwiperBox/SwiperBox';
import InfoDivider from '../modules/InfoDivider/InfoDivider';
import Collections from '../modules/Collections/Collections';

const Landing = () => {
  return (
    <>
      <HomepageHero/>
      <InfoDivider/>
      <Collections/>
      <Divider orientation='horizontal' />
      <SwiperBox/>
    </>
  )
}

export default Landing