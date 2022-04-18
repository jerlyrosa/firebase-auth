import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Box } from "@chakra-ui/react";
import React from "react";

import {PropsChildrenType} from './types/types'


export default function Layout ({ children}:PropsChildrenType) {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      {/* <Header /> */}
      <Box>
        <Stack>
          {children}
        </Stack>
      </Box>
    </Box>
  );
}