import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../config/fire";
import { useAuthState } from "react-firebase-hooks/auth";
import{ Center, Container, 
  HStack, VStack, 
  Heading, FormControl, 
  FormLabel, Button,
  Input,
  Link,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, loading] = useAuthState(auth);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (user) navigate("/dashboard");
  // }, [user, loading, navigate]);

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Center pt="3em">
        <Container maxW="container.lg">
            <HStack w="100%" h="500px" justifyContent="center" >
              <VStack w="40%" bg="#9182EC" 
                      h="100%" borderRadius="md"
                      color="white">
                <HStack pt="3em">
                  <Heading pt="1em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                    Sign-In
                  </Heading>
                </HStack>
                <VStack p="3em">
                  <FormControl>
                    <FormLabel htmlFor='email' >Email address</FormLabel>
                      <Input id='email' type='email' bg="white" color="black" 
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            />
                    {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    <FormLabel htmlFor='password'
                                pt="1em">Password</FormLabel>
                    <InputGroup>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        bg="white" color="black"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' 
                        // onClick={handleClick}  
                        color="black">
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                      </InputGroup>
                      <HStack pt="1em" color="black">
                        <Button 
                        // onClick={() => signInWithEmailAndPassword(email, password)}
                        >Log In</Button>
                      </HStack>
                      <HStack>
                      <Button className="login__btn login__google" onClick={signInWithGoogle}>
                          Login with Google
                        </Button>
                      </HStack>
                  </FormControl>
                </VStack>
              </VStack>
              {/*---------------------------------------------------- */}
              <VStack w="40%" bg="#00A3C4" 
                      color="white" h="100%" 
                      borderRadius="md">
                <Heading pt="3em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  Hello Friend
                </Heading>
                <Heading p="2em"
                        fontSize={{base: "lg", md: "xl", lg:"2xl"}}
                        fontWeight="550">
                  Enter your personal details and start journey with us</Heading>
                  <Link href="/sign-up">
                    <Button rightIcon={<ArrowForwardIcon />} color="black">Sign-up</Button>
                  </Link>
              </VStack>
            </HStack>
        </Container>
    </Center>
  )
}

export default Login