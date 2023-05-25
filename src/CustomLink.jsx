import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

function CustomLink({ href, children }) {
  return <ChakraLink _active={{ transform: 'scale(0.95)' }} px="6px" py="3px" borderRadius="md" to={href} as={Link}>{children}</ChakraLink>;
}
export default CustomLink;
