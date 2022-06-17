import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../config/fire";
import { useAuthState } from "react-firebase-hooks/auth";
import{ Center, Container, 
  HStack, VStack, Stack,
  Heading, FormControl, 
  FormLabel, Button,
  Input,
  Link,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Center pt="3em">
        <Container maxW="container.lg">
            <Stack w="100%" h="100%" justifyContent="center" 
                  direction={[ 'column', 'row']}>
              <VStack w={{base: '350px', md: '550px', lg: '50%'}} bg="#9182EC" 
                      h="550px" borderRadius="md"
                      color="white">
                <VStack pt="2em">
                  <Heading pt="1em"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                    Log-In
                  </Heading>
                  <Heading p="0.5em" align="center"
                          fontSize={{base: "md", md: "lg", lg:"xl"}}
                          fontWeight="650">
                    by using your email and password
                  </Heading>
                </VStack>
                <VStack p="3em">
                  <FormControl>
                    <FormLabel htmlFor='email' >Email address</FormLabel>
                    <InputGroup>
                      <Input w={{base: '250px', md: '250px', lg: '300px'}}
                            id='email' type='email' 
                            bg="white" color="black" 
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </InputGroup>
                    <FormLabel htmlFor='password'
                                pt="1em">Password</FormLabel>
                    <InputGroup>
                      <Input w={{base: '250px', md: '250px', lg: '300px'}}
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        bg="white" color="black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width={{base: '3.5rem', md: '3.5rem', lg: '4.75rem'}} 
                          mr={{base: '0.5rem', md: '0.5rem', lg: '0rem'}}>
                        <Button h='1.75rem' size='sm' 
                        onClick={handleClick}  
                        color="black">
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                      </InputGroup>
                      <HStack pt="2em" color="black">
                        <HStack >
                          <Button 
                          onClick={() => signInWithEmailAndPassword(email, password)}
                          >Log In</Button>
                        </HStack>
                        <HStack>
                        <Button className="login__btn login__google" onClick={signInWithGoogle}>
                            Login with Google
                          </Button>
                        </HStack>
                      </HStack>
                  </FormControl>
                </VStack>
              </VStack>
              {/*---------------------------------------------------- */}
              <VStack bg="#00A3C4" 
                      color="white" h="550px" 
                      borderRadius="md"
                      w={{base: '350px', md: '550px', lg: '50%'}}
                      >
                <Heading pt="2em" align="center"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  Hello Friend
                </Heading>
                <Heading pt="2em" align="center"
                          fontSize={{base: "xl", md: "2xl", lg:"3xl"}}
                          fontWeight="650">
                  New to Website?
                </Heading>
                <Heading p="2em" align="center"
                        fontSize={{base: "lg", md: "xl", lg:"2xl"}}
                        fontWeight="550">
                  Enter your personal info and start journey with us.</Heading>
                  <Link href="/sign-up" pt="2em">
                    <Button rightIcon={<ArrowForwardIcon />} color="black">Sign-up</Button>
                  </Link>
              </VStack>
            </Stack>
        </Container>
    </Center>
  )
}

export default Login