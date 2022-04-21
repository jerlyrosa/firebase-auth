import { PropsChildrenType } from './types/types'
import {  Center, Flex, Heading, Link } from '@chakra-ui/layout';


export default function Header({ children }: PropsChildrenType) {
    return (
        <Flex zIndex={1} position="sticky" top={0} bgColor="black" p={4} boxShadow="rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px">
        <Flex flex={1} m="auto" align="center">
            <Link _hover={{ textDecoration: 'none' }}>
              <Center>
                <Heading size="lg" color="#ffffff">
                  Firebase Auth
                </Heading>
              </Center>
            </Link>
        </Flex>
      </Flex>
    );
}