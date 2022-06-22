import React from 'react'
import { 
    HStack,
    VStack,
    Input, 
    Button,
    Heading,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player'
import Thankyou from '../../../assets/Lottie/Thankyou.json'
// import MailchimpSubscribe from "react-mailchimp-subscribe"

const SignupForm = () => {
  // const url = "https://gmail.us11.list-manage.com/subscribe/post?u=b4ad4c7c1c4a28f269436c116&id=f454d02b9b"

  // const SimpleForm = () => <Input url={url}/>

  return (
    <VStack p="5px">
    <Heading fontSize={{base: 'sm',md: 'md',lg: 'xl'}} fontWeight="450">Join our mailing list</Heading>
    <HStack w={{base: '100%',md: '100%',lg: '100%'}}>
        <Input variant='filled' placeholder='your@email.com' 
      />
      <Popover pt="2em">
        <PopoverTrigger>
          <Button colorScheme='#494565'>
            Submit
          </Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
                <HStack 
                pt="2em"
                h={{base: '100px', md: '100px', lg: '100px'}}>
                <Player autoplay
                        controls
                        loop
                        mode="normal"
                        src={Thankyou}></Player>
                </HStack>
            </PopoverBody>
        </PopoverContent>
      </Popover>       
    </HStack>
    {/* <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    /> */}
    </VStack>
  )
}

export default SignupForm