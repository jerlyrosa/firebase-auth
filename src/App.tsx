import { LoginForm } from './components/login-form';

import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Layout from './components/layout';

import theme from "./theme/index";



function App() {
  return (

    <>
      {/* <ChakraProvider theme={theme} resetCSS={false}> */}

          <LoginForm />
        {/* </Box> */}
      {/* </ChakraProvider> */}
    </>
  );
}

export default App;
