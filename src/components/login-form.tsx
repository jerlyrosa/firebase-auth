import {
    FormControl,
    FormLabel,
    Input, Box, Button, Stack

} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Heading  } from '@chakra-ui/layout';
import Layout from './layout';
const LoginForm = (): JSX.Element => {



    return (
        <Layout >

        <Container mx="auto" bgColor="#fff" boxShadow=" 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);" p={10} mt="5rem" maxWidth="30rem"  borderRadius="lg"  textAlign="center" >
            <FormControl >
            <Heading fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>Sign in</Heading>
                <Stack spacing={3}>

                    <FormLabel htmlFor='email' fontSize={{ base: "2rem" }}>Email address</FormLabel>
                    <Input name="username" id="" w="27rem" size='lg' placeholder='Username' />

                    <FormLabel htmlFor='password' fontSize={{ base: "2rem" }} >Password</FormLabel>
                    <Input name="password"  w="27rem" size='lg' placeholder="Password" type="password" />
                </Stack>
                <Button colorScheme='blue' margin="2rem">Send</Button>
            </FormControl>
        </Container>
        </Layout>

    )



}

export { LoginForm }

const Container = styled(Box)`
        /* width: 100%;
        margin: 0 auto; */

`
