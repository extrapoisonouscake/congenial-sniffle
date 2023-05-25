import {
  Box, Text, Image, GridItem, Flex, Link,
} from '@chakra-ui/react';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';

export default function ProjectCard({ description, src, href }) {
  return (
    <GridItem>
      <Box bg="gray.200" overflow="hidden" data-group pos="relative" aspectRatio="1 / 1" borderRadius="35px">

        <Box _active={{ transform: 'scale(0.9)' }} w="40px" h="40px" color="#fff" _groupHover={{ bg: '#fff', color: 'black' }} _groupFocus={{ bg: '#fff', color: 'black' }} transition="all .3s cubic-bezier(.645,.045,.355,1)" pos="absolute" zIndex={3} top="20px" right="20px" p={1.5} bg="rgba(255,255,255,0.2)" borderColor="gray.300" borderRadius="full">
          <Link cursor="alias" isExternal href={href}>
            <ArrowIcon width="100%" height="100%" />
          </Link>
        </Box>

        <Flex justify="center" align="center" px="calc(10% + 20px)" pt="0px" h={{ sm: '100%', lg: 'calc((100% - 80%) + 120px - 25px - 5%)' }}>
          <Text
            align="center"
            fontSize={{
              sm: '1.3rem', pr: '1.4rem', pre: '3xl', md: '1.4rem', lg: 'xl',
            }}
          >
            {description}
          </Text>
        </Flex>
        <Box pos="absolute" bottom={0} left={0} _groupHover={{ transform: 'scale(0.8)', bottom: { sm: '-100%', lg: '-120px' } }} _groupFocus={{ transform: 'scale(0.8)', bottom: '-150px' }} transition="all .4s cubic-bezier(.645,.045,.355,1)" w="100%" h="100%"><Image borderRadius="35px" src={src} objectFit="cover" /></Box>
      </Box>

    </GridItem>
  );
}
