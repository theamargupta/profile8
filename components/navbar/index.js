import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/layout';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { StyledLink } from '../styled/link';
import { ContentWrapper } from '@/layouts/contentWrapper';
import NextLink from 'next/link';
import Image from 'next/image';

export const Navbar = ({ isOpen, toggleIsOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { colorDark } = useColorModeSwitcher();
  return (
    <ContentWrapper>
      <Box w={{ base: '90%', '2xl': '100%' }}>
        <Flex
          mb={isOpen ? { base: '1rem' } : { base: '4.5rem', lg: '6rem' }}
          as="nav"
          p="4"
          justify="space-between"
        >
          <MenuButton toggleIsOpen={toggleIsOpen} />
          
          {/* Beautiful Logo Section */}
          <NextLink href="/" passHref>
            <Flex
              as="a"
              align="center"
              gap={{ base: 3, md: 4 }}
              cursor="pointer"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'translateY(-2px)',
                filter: 'brightness(1.1)',
              }}
              role="group"
            >
              <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s ease-in-out"
                _groupHover={{
                  boxShadow: 'xl',
                  transform: 'scale(1.05)',
                }}
              >
                <Image
                  src="https://i.ibb.co/cXpccm8Z/www-linkedin-com-in-theamargupta-1.png"
                  width={60}
                  height={60}
                  alt="Amar Gupta"
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              
              <VStack align="start" spacing={0} display={{ base: 'none', sm: 'flex' }}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight="bold"
                  color={colorMode === 'light' ? 'primary.600' : 'primary.300'}
                  lineHeight="1.2"
                  transition="color 0.2s ease-in-out"
                  _groupHover={{
                    color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                  }}
                >
                  Amar Gupta
                </Text>
                <Text
                  fontSize="sm"
                  color={colorMode === 'light' ? 'neutral.600' : 'neutral.400'}
                  fontWeight="medium"
                  opacity={0.8}
                  transition="opacity 0.2s ease-in-out"
                  _groupHover={{
                    opacity: 1,
                  }}
                >
                  Developer & Creator
                </Text>
              </VStack>
              
              {/* Mobile version - name only */}
              <Text
                display={{ base: 'block', sm: 'none' }}
                fontFamily="heading"
                fontSize="lg"
                fontWeight="bold"
                color={colorMode === 'light' ? 'primary.600' : 'primary.300'}
                transition="color 0.2s ease-in-out"
                _groupHover={{
                  color: colorMode === 'light' ? 'primary.700' : 'primary.200',
                }}
              >
                Amar
              </Text>
            </Flex>
          </NextLink>

          <HStack spacing={{ base: 0, md: 8 }}>
            <Flex align="center" display={{ base: 'none', lg: 'flex' }} as="ul">
              <Item variant="noStyle" href="/">
                Home
              </Item>
              <Item variant="noStyle" href="/about">
                About
              </Item>
              <Item variant="noStyle" href="/projects">
                Projects
              </Item>
              <Item isExternal variant="noStyle" href="/AmarResume.pdf">
                CV
              </Item>
            </Flex>
            <IconButton
              id="toggleTheme"
              borderRadius="sm"
              variant="icon"
              onClick={toggleColorMode}
              aria-label={
                colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
              }
              icon={
                colorMode === 'light' ? (
                  <IoMoon size="1.25rem" />
                ) : (
                  <IoSunnyOutline size="1.25rem" />
                )
              }
            />
          </HStack>
        </Flex>{' '}
      </Box>
    </ContentWrapper>
  );
};

export const MobileNavMenu = () => {
  return (
    <VStack spacing={4} w="100%">
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item spacing={4} variant="large" href="/">
          Home
        </Item>
        <Item spacing={4} variant="large" href="/about">
          About
        </Item>
        <Item spacing={4} variant="large" href="/projects">
          Projects
        </Item>
        <Item spacing={4} variant="large" href="/blog">
          Blog
        </Item>
        <Item spacing={4} variant="large" href="/AmarResume.pdf">
          CV
        </Item>
      </VStack>
      <VStack p={4} w="100%" my={8} spacing={8} as="ul">
        <Item variant="large" href="/newsletter">
          Newsletter
        </Item>
        <Item variant="large" href="/community">
          Community
        </Item>
        <Item variant="large" href="/uses">
          Uses
        </Item>
      </VStack>
    </VStack>
  );
};

const MenuButton = ({ toggleIsOpen, ...props }) => {
  const [clicked, toggleClicked] = useToggle();

  const handleClick = () => {
    toggleIsOpen();
    toggleClicked();
  };
  return (
    <IconButton
      borderRadius="sm"
      onClick={handleClick}
      display={{ base: 'block', lg: 'none' }}
      w="48px"
      h="48px"
      variant="ghost"
      _hover={{ variant: 'ghost' }}
      {...props}
      icon={<MenuIcon clicked={clicked} />}
    />
  );
};

const MenuIcon = ({ clicked }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Box w="100%" h="100%" position="relative">
      <Line
        left={clicked ? '8px' : '4px'}
        bg={colorDark}
        top={clicked ? '22px' : '16px'}
        transform={clicked ? 'rotate(45deg)' : 'none'}
        width={clicked ? '32px' : '40px'}
      />
      <Line
        left={clicked ? '8px' : '4px'}
        transform={clicked ? 'rotate(-45deg)' : 'none'}
        bg={colorDark}
        bottom={clicked ? '22px' : '16px'}
        width={clicked ? '32px' : '16px'}
      />
    </Box>
  );
};

const Line = ({ ...props }) => {
  return (
    <Box
      {...props}
      borderRadius="1px"
      as="span"
      position="absolute"
      height="4px"
      transition="all 0.3s ease-in-out"
    />
  );
};

const Item = ({ children, href, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  //const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      align="start"
      pb={{ base: 4, lg: 0 }}
      w="100%"
      as="li"
      listStyleType="none"
      borderBottom={{ base: '1px solid', lg: 'none' }}
      borderColor={colorGrey}
    >
      <StyledLink {...props} href={href}>
        {children}
      </StyledLink>
    </VStack>
  );
};
