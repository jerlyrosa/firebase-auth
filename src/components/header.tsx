import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Box } from "@chakra-ui/react";
import { PropsChildrenType } from './types/types'



export default function Header({ children }: PropsChildrenType) {
    return (
        <Box>
            {children}
        </Box>
    );
}