import { FormControl, FormLabel, Input, Box, Button, Stack, InputRightElement, InputGroup, Checkbox } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout';
import Layout from './layout';
import { useState } from 'react';




const LoginForm = (): JSX.Element => {
    
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Layout >

            <Box mx="auto" bgColor="#fff" boxShadow=" 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);" p={10} mt="5rem" maxWidth="30rem" borderRadius="lg" textAlign="center" >
                <FormControl >
                    <Heading fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }} mt={0}>Sign in</Heading>
                    <Stack spacing={2}>

                        <FormLabel htmlFor='email' fontSize={{ base: "1.8rem" }}>User Name</FormLabel>
                        <Input name="username" type='email' w="27rem" size='lg' placeholder='Username' />

                        <FormLabel htmlFor='password' fontSize={{ base: "1.8rem" }} >Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                size='lg'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                w="27rem"
                            />
                            <InputRightElement alignItems="self-end" >
                                <Checkbox onChange={handleClick} ></Checkbox>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Button colorScheme='blue' margin="2rem">Send</Button>
                </FormControl>
            </Box>
        </Layout>

    )



}

export { LoginForm }

