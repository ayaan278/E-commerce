import React, 
{ useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../config/fire";
import{ Center, Container, 
  HStack, VStack, Stack,
  Heading, FormControl, 
  FormLabel, Button,
  Input,
  InputGroup,
  Link,
  InputRightElement
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    // else if (user) history.replace("/");
  }, 
  [user, loading]);

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Center pt="2em">
        <Container maxW="container.xl">
            <Stack w="100%" h="100%" justifyContent="center" 
                  direction={[ 'column', 'row']}>
              <VStack w={{base: '350px', md: '550px', lg: '40%'}}
                      bg="#00A3C4" 
                      h="550px"
                      color="white"
                      borderRadius="md"
                      align="center">
                <Heading pt="2em" align="center"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  Welcome Back!
                </Heading>
                <Heading pt="2em" align="center"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  You Know your way <br></br>around here?
                </Heading>
                <Heading p="2em" align="center"
                        fontSize={{base: "lg", md: "xl", lg:"2xl"}}
                        fontWeight="550">
                  Then please login with your personal info.</Heading>
                  <Link href="/log-in" pt="2em">
                    <Button leftIcon={<ArrowBackIcon />} color="black">Log-In</Button>
                  </Link>
              </VStack>

              <VStack w={{base: '350px', md: '550px', lg: '40%'}} bg="#9182EC" 
                      h="550px" borderRadius="md"
                      color="white">
                <VStack pt="1.5em">
                  <Heading pt="1em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                    Create Account
                  </Heading>
                  <Heading p="0.5em" align="center"
                          fontSize={{base: "md", md: "lg", lg:"xl"}}
                          fontWeight="650">
                    by entering name, email and password
                  </Heading>
                </VStack>
                <VStack p="2em">
                  <FormControl >
                  <FormLabel htmlFor='name'
                    pt="1em">Name</FormLabel>
                    <InputGroup>
                    <Input w={{base: '250px', md: '250px', lg: '300px'}}
                        bg="white" color="black"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                      />
                    </InputGroup>
                    <FormLabel htmlFor='email'
                        pt="1em">Email address</FormLabel>
                    <InputGroup>
                      <Input w={{base: '250px', md: '250px', lg: '300px'}}
                        bg="white" color="black"
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        />
                    </InputGroup>
                    <FormLabel htmlFor='password'
                        pt="1em">Password</FormLabel>
                    <InputGroup >
                      <Input w={{base: '250px', md: '250px', lg: '300px'}}
                        bg="white" color="black"
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width={{base: '3.5rem', md: '3.5rem', lg: '4.75rem'}}
                                            mr={{base: '2rem', md: '2rem', lg: '0rem'}}>
                          <Button h='1.75rem' size='sm' 
                          color="black"
                          onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <HStack pt="2em">
                        <HStack >
                            <Button color="black" 
                            onClick={register}
                            >Sign Up</Button>
                        </HStack>
                        <HStack>
                        <Button color="black" 
                            onClick={signInWithGoogle}>
                            Signup with Google
                          </Button>
                        </HStack>
                      </HStack>
                  </FormControl>
                </VStack>
              </VStack>
            </Stack>
        </Container>
    </Center>
  )
}

export default Signup