import { FormControl, FormLabel, Input, Box, Button, Stack, InputRightElement, InputGroup, Checkbox } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout';
import Layout from './layout';
import { useState } from 'react';

const RegisterForm = (): JSX.Element => {

    const [show, setShow] = useState<boolean>(false)
    const handleClick = ():void => setShow(!show)

    return (
        <Layout >

            <Box mx="auto" bgColor="#fff" boxShadow=" 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);" p="1rem 4.5rem 1rem 4.5rem" mt="5rem" maxWidth="30rem" borderRadius="lg" textAlign="center" >
                <FormControl >
                    <Heading fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>Create an account</Heading>
                    <Stack spacing={2}>

                        <FormLabel htmlFor='user' fontSize={{ base: "1.5rem" }}>User name</FormLabel>
                        <Input name="username" id="" w="27rem" type='text' size='lg' placeholder='User name' />

                        <FormLabel htmlFor='name' fontSize={{ base: "1.5rem" }}>Full Name</FormLabel>
                        <Input name="name" w="27rem" type='text' size='lg' placeholder='Full Name' />

                        <FormLabel htmlFor='email' fontSize={{ base: "1.5rem" }}>Email address</FormLabel>
                        <Input name="emailaddress" id="" w="27rem" size='lg' type='email' placeholder='Email' />

                        <FormLabel htmlFor='password' fontSize={{ base: "1.5rem" }} >Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                size='lg'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
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

export { RegisterForm }



