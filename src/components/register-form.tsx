import { FormControl, Box,  Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Heading, Link, Text } from '@chakra-ui/layout';


const RegisterForm = (): JSX.Element => {


    return (
        <Container maxWidth={1140} mt={10}>

            <CardForm>
            <Heading fontSize={{ base: "2.2rem", sm: "2.4rem", md: "3rem" }}>Create an account</Heading>

                        {/* <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText> */}
            </CardForm>
        </Container>
    )



}

export { RegisterForm }



const Container = styled(Box)`
        width: 100%;
        margin: 0 auto;

`

const CardForm = styled(FormControl)`
    
    max-width: 30rem;
    margin: 0 auto
`