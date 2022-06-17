import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../config/fire";
import{ Center, Container, 
  HStack, VStack, 
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
  const [user, loading] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading, history]);

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Center pt="3em">
        <Container maxW="container.xl">
            <HStack w="100%" h="500px" justifyContent="center">
            <VStack w="40%" bg="#00A3C4" 
                      color="white" h="100%" 
                      borderRadius="md">
                <Heading pt="3em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  Welcome Back!
                </Heading>
                <Heading p="2em"
                        fontSize={{base: "lg", md: "xl", lg:"2xl"}}
                        fontWeight="550">
                  To keep connected with us please login with your personal info</Heading>
                  <Link href="/log-in">
                    <Button leftIcon={<ArrowBackIcon />} color="black">Log-In</Button>
                  </Link>
              </VStack>

              <VStack w="40%" bg="#9182EC" 
                      h="100%" borderRadius="md"
                      color="white">
                <VStack pt="3em">
                  <Heading pt="1em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                    Create Account
                  </Heading>
                  <Heading p="1em"
                          fontSize={{base: "md", md: "lg", lg:"xl"}}
                          fontWeight="650">
                    or use your email for registration
                  </Heading>
                </VStack>
                <VStack p="3em">
                  <FormControl >
                  <Input
                      type="text"
                      className="register__textBox"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                    />
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                      <Input id='email' value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    <FormLabel htmlFor='password'
                                pt="1em">Password</FormLabel>
                    <InputGroup>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                      </InputGroup>
                      <HStack pt="1em">
                        <RouteLink>
                          <Button color="black" onClick={register}>Sign Up</Button>
                        </RouteLink>
                      </HStack>
                      <HStack>
                      <Button
                          className="register__btn register__google"
                          onClick={signInWithGoogle}
                        >
                          Register with Google
                        </Button>
                      </HStack>
                  </FormControl>
                </VStack>
              </VStack>

            </HStack>
        </Container>
    </Center>
  )
}

export default Signup