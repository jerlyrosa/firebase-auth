
import './App.css';
import { RegisterForm } from './components/register-form';

import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Layout from './components/layout';

import theme from "./theme/index";

function App() {
  return (

    <>
      <ChakraProvider  theme={theme} resetCSS={false}>
      <Box as ="h1"  textAlign="center"  textStyle="body4Uppercase">
       THEMA LISTO
        </Box>
      </ChakraProvider>




    </>
  );
}

export default App;
