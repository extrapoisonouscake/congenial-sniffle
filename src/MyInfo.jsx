import {
  Heading, Text, Box, Grid, Icon, GridItem, Flex, Image,
} from '@chakra-ui/react';
import cookieSrc from './assets/cookie.png';
import { ReactComponent as JsIcon } from './assets/js.svg';
import { ReactComponent as ReactIcon } from './assets/reactjs.svg';
import { ReactComponent as NodeIcon } from './assets/nodejs.svg';
import { ReactComponent as FigmaIcon } from './assets/figma.svg';
import rbxupSrc from './assets/1.png';
import bloxmartSrc from './assets/2.png';
import ProjectCard from './ProjectCard';
import Social from './Social';

const data = [
  {
    name: 'RBXUP',
    description: 'Robux e-shop with a fully operational ordering system and 30,000 clients every month.',
    href: 'https://rbxup.ru',
    src: rbxupSrc,
  },
  {
    name: 'RBXUP',
    description: 'The ultimate Roblox marketplace. Discover rare items, stylish outfits, and more. Unleash your imagination in the vibrant Roblox universe.',
    href: 'https://bloxmart.ru',
    src: bloxmartSrc,
  },
];
export default function MyInfo() {
  return (
    <>
      <Flex direction={{ sm: 'column', lg: 'row' }} justify={{ lg: 'space-between' }}>
        <Heading fontWeight={100} fontSize={{ sm: '5rem', md: '7rem' }} width="fit-content" lineHeight={1} textTransform="uppercase">Hi, I&apos;m Vlad.</Heading>
        <Box display={{ sm: 'none', lg: 'block' }}><Social /></Box>
      </Flex>

      <Text fontSize="xl">
        A web developer proficient in JavaScript
        {' '}
        <Icon verticalAlign="-0.1rem" as={JsIcon} />
        , React
        {' '}
        <Icon verticalAlign="-0.1rem" as={ReactIcon} />
        , NodeJS
        {' '}
        <Icon verticalAlign="-0.1rem" as={NodeIcon} />
        , and Figma
        {' '}
        <Icon verticalAlign="-0.1rem" as={FigmaIcon} />
        .

      </Text>
      <Text fontSize="xl">
        I&apos;m
        passionate about creating clean and efficient code that delivers great
        user experiences.

      </Text>
      <Text fontSize="xl">
        I&apos;m a team player and believe that open
        communication and mutual respect are key to building successful
        partnerships.
      </Text>

      <Grid mt={5} gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }} gap="10px">
        {data.map((d) => <ProjectCard {...d} />)}
        <GridItem>
          <Flex bg="gray.200" borderRadius="35px" justify="center" align="center" aspectRatio="1 / 1">
            <Image w="100px" h="100px" src={cookieSrc} />
          </Flex>

        </GridItem>
      </Grid>
      <Box display={{ sm: 'block', lg: 'none' }}><Social /></Box>
    </>
  );
}
