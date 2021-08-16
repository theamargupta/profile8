import NextLink from 'next/link';
import useToggle from '@/utils/hooks/useToggle';
import { Icon } from '@chakra-ui/icons';
import { Link, HStack, VStack, Center } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { fetchSocials } from '@/services/dataapi';
import { toolsIcons } from '@/utils/icons';

const Footer = ({ socials }) => {
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <VStack
      borderTop="1px solid"
      borderColor="neutral.200"
      py="32px"
      w="100%"
      spacing={{ base: '16px', lg: '64px' }}
      as="footer"
    >
      {isLarge ? <Full socials={socials} /> : <Condensed socials={socials} />}
      <Link
        href={`https://github.com/theamargupta/profile8`}
        isExternal
        variant="noStyle"
        align="center"
      >
        © Designed and coded by Amar Gupta
      </Link>
    </VStack>
  );
};

const Condensed = ({ socials }) => {
  return (
    <HStack as="ul">
      {socials?.map((data) => (
        <SocialLink
          key={data.id}
          color={data.color}
          icon={toolsIcons[`${data.icon}`]}
          href={data.href}
          name={data.name}
        />
      ))}
    </HStack>
  );
};

const Full = ({ socials }) => {
  return (
    <HStack align="start" spacing="16rem">
      <MainRoutes />
      <Socials socials={socials} />
    </HStack>
  );
};

const MainRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/AmarResume.pdf">CV</NavLink>
    </VStack>
  );
};

const SubRoutes = () => {
  return (
    <VStack h="100%" align="start">
      <NavLink href="/newsletter">Newsletter</NavLink>
      <NavLink href="/community">Community</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </VStack>
  );
};

const Socials = ({ socials }) => {
  return (
    <VStack spacing={0.25} h="100%" as="ul">
      {socials?.map((data) => (
        <SocialLink
          key={data.id}
          color={data.color}
          icon={toolsIcons[`${data.icon}`]}
          href={data.href}
          name={data.name}
        >
          {data.name}
        </SocialLink>
      ))}
    </VStack>
  );
};

const SocialLink = ({ children, color, icon, href, name }) => {
  const [hover, toggleHover] = useToggle();
  const [isLarge] = useMediaQuery('(min-width: 992px)');
  return (
    <Center
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      as="li"
      listStyleType="none"
    >
      <Link
        variant="subtle"
        display="flex"
        alignItems="center"
        p={2}
        href={href}
        isExternal
      >
        <Icon
          transform={hover ? 'translateY(-4px)' : 'none'}
          transitionDuration="500ms"
          fill={hover && color}
          mr={{ lg: '0.25rem' }}
          boxSize={{ base: '1.5rem', lg: '1rem' }}
          aria-hidden={true}
          as={icon}
        />
        {children}
        {!isLarge && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </Center>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
};

export default Footer;
