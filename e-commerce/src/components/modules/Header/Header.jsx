import { Button, 
    Flex, 
    Link, 
    HStack, 
    Show, 
    Spacer,
    Hide, 
    VStack,
    Drawer, 
    DrawerBody, 
    // DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent,
    DrawerCloseButton, 
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../../elements/Logo/Logo'
import DropdownMenu from '../../elements/DropdownMenu/DropdownMenu';
import { BsFillPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
    return (
        <Flex as="header" w="100%"
        wrap="wrap"
        p={7}
        bg="#2A254B"
        color='white'
        justifyContent={'flex-start'}>
            <HStack w="20%">
                <Show breakpoint='(max-width: 600px)'>
                    <MobileHeader/>
                </Show>
                <Logo/>
            </HStack>
            <Spacer />
            <Hide breakpoint='(max-width: 600px)'>
                <HStack
                    w="60%"
                    justifyContent={'center'} >
                    <Link href="/">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Home
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            About
                        </Button> 
                    </Link>
                    <Link href="/shop">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Shop
                        </Button>
                    </Link>
                    <Link href="/contact" >
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Contact Us
                        </Button> 
                    </Link>
                </HStack>
            </Hide>
            <Spacer />
            <HStack w="20%" 
                    pt="0.5em"
                    pr="0.5em"
                    justifyContent={'right'}>
                <HStack>
                    <span size='md' class="inline-block h-10 w-12 ring-white ">
                        <DropdownMenu 
                                menu1="See My Cart" 
                                menu2="Check Out" 
                                icon={<HiShoppingCart/>}
                                link1="/cart"/>
                    </span>
                    <span size='md' class="inline-block h-10 w-12 ring-white">
                        <DropdownMenu 
                                menu1="Log In" 
                                menu2="Sign Up" 
                                icon={<BsFillPersonFill/>}
                                link1="/log-in"
                                link2="/sign-up"/>
                    </span>
                </HStack>
            </HStack>
        </Flex>
  )
}

export function MobileHeader(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Link>
            <span ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <GiHamburgerMenu/>
            </span>
        </Link>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>E-commerce</DrawerHeader>
            <DrawerBody>
            <VStack
                    w="100%"
                    justifyContent={'center'} >
                    <Link href="/">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Home
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            About
                        </Button> 
                    </Link>
                    <Link href="/shop">
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Shop
                        </Button>
                    </Link>
                    <Link href="/contact" >
                        <Button colorScheme="cyan"
                                variant='ghost'>
                            Contact Us
                        </Button> 
                    </Link>
                </VStack>
            </DrawerBody>
            {/* <DrawerFooter>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }