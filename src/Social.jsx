import { Flex, Link, Box } from '@chakra-ui/react';
import { ReactComponent as ArrowIcon } from './assets/arrow.svg';

function SizedIcon() {
  return (
    <Box display="inline-block">
      <ArrowIcon
        style={{
          verticalAlign: '-0.15rem', transform: 'rotate(45deg) translateX(-1px)',
        }}
        width="1.35rem"
        height="1.35rem"
      />

    </Box>
  );
}
function StyledLink({ href, children }) {
  return (
    <Link
      href={href}
      pos="relative"
      isExternal
      display="flex"
      justifyContent="center"
      flex={1}
      w="fit-content"
      _hover={{ transform: 'scale(0.95)' }}
      transition="transform .2s ease-in-out"
      data-group
    >
      {children}
    </Link>
  );
}
export default function Social() {
  return (
    <Flex mt={{ sm: 5, lg: 0 }} justify={{ sm: 'space-around', lg: 'initial' }} direction={{ lg: 'column' }} fontSize="xl">
      <StyledLink href="https://github.com/extrapoisonouscake">
        Github
        <SizedIcon />
      </StyledLink>
      <StyledLink href="https://dribbble.com/extrapoisonouscake">
        Dribbble
        <SizedIcon />

      </StyledLink>
      <StyledLink href="https://t.me/extrapoisonouscake">
        Telegram
        <SizedIcon />

      </StyledLink>
    </Flex>
  );
}
