import {  Box, Grid  } from "@chakra-ui/react";
import {PropsChildrenType, } from './types/types'
import Header from "./header";
import FooterUI from "./footer";

export default function Layout ({ children}:PropsChildrenType) {

  return (

    <Grid h="100vh" templateRows="auto 1fr auto"  >
      <Header >
        <h1>Formularios</h1>
      </Header>
      <Box  >
          {children}
      </Box>

     <FooterUI/>
    </Grid >
  );
}