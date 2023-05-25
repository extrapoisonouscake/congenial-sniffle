import {
  Box, HStack, Image, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import vladSrc from './assets/vlad.png';
import CustomLink from './CustomLink';

function CustomText({ children }) {
  return <Text color="gray.600">{children}</Text>;
}
export default function Header() {
  return (
    <HStack w="full" as="header" justify="space-between">
      <Link to="/"><Box transition="transform .2s ease-in-out" _active={{ transform: 'scale(0.95)' }} w="50px" h="50px"><Image borderRadius="lg" src={vladSrc} /></Box></Link>
      <HStack spacing={1}>
        <CustomLink href="/about"><CustomText>About me</CustomText></CustomLink>
        <CustomLink href="/projects"><CustomText>Projects</CustomText></CustomLink>
      </HStack>
    </HStack>
  );
}
