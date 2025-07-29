import {
  Heading,
  Flex,
  Text,
  VStack,
  Box,
  Center,
  useMediaQuery,
  Button,
  Link,
  List,
  Icon,
  HStack,
  Grid,
  GridItem,
  Container as ChakraContainer
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Container from '@/layouts/container';
import { HeroVisual } from '@/components/svg/heroVisual';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import Subscribe from '@/components/subscribe';
import { fetchHomePage } from '@/services/dataapi';
import { ProjectCard } from '@/components/projectCard';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { css } from '@emotion/react';
import { BsArrowDown } from 'react-icons/bs';
import { toolsIcons } from '@/utils/icons';

export default function Homepage({ projects, socials, skills }) {
  return (
    <Container socials={socials}>
      <ContentWrapper>
        <Hero />
        <About skills={skills} />
        <FeaturedProjects projects={[projects[0], projects[1]]} />
        <Subscribe />
      </ContentWrapper>
    </Container>
  );
}

const Hero = () => {
  const [isXtraLarge] = useMediaQuery('(min-width: 1280px)');
  const [scrollPos, setScrollPos] = useState();

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);

    return () => {
      window.removeEventListener('scroll', listenScroll);
    };
  });

  const listenScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledFloat = windowScroll / height;

    const scrolled = scrolledFloat > 0.05;

    setScrollPos(scrolled);
  };

  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <Flex mb="4rem" justify="space-between">
        <Box
          // m={!isXtraLarge && 'auto'}
          w={{ base: '100%', xl: '50%' }}
        >
          <Heading mb="0.5rem" as="h1" variant="h1">
            Hi, I’m Amar Gupta.
          </Heading>
          <Text mb={{ base: '4rem', lg: '6rem' }} as="h2" variant="subtitle">
            Welcome to my corner of the internet, where you can find my works,
            thoughts, favourite beer and other random things.
          </Text>
          <Heading as="h3" variant="h3" mb="0.5rem">
            Ok, but who are you?
          </Heading>
          <Text fontSize="xl" mb="2rem">
            I’m a curiosity-driven, design-focused developer, building rich,
            user-centric, inclusive experiences on the web.
          </Text>
          <Text fontSize="xl" mb={{ base: '1rem', lg: '2rem' }}>
            Feel free to have a look around, and learn more about myself and
            what I like to work on.{' '}
          </Text>
          <NextLink href="/about#contact" passHref>
            <Button as="a" variant="primaryThemed" size="lg">
              Get in touch
            </Button>
          </NextLink>
        </Box>
        {isXtraLarge && <HeroVisual />}
      </Flex>
      {isXtraLarge && <ScrollArrow scrollPos={scrollPos} />}
    </Box>
  );
};
const About = ({ skills }) => {
  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <Heading textAlign="center" as="h2" variant="h2" mb="4rem">
        About
      </Heading>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={{ base: '4rem', lg: '6rem' }}
        align="flex-start"
        justify="space-between"
        mb="4rem"
      >
        <Box flex="1" maxW={{ lg: '48%' }}>
          <AboutHeading />
        </Box>
        <Box flex="1" maxW={{ lg: '48%' }}>
          <Skills skills={skills} />
        </Box>
      </Flex>
    </Box>
  );
};
const ScrollArrow = ({ scrollPos }) => {
  const { colorDark } = useColorModeSwitcher();
  return (
    <VStack
      opacity={scrollPos ? 0 : 1}
      transition="visibility 0s linear 300ms, opacity 600ms"
      visibility={scrollPos ? 'hidden' : 'visible'}
    >
      <span>Scroll</span>
      <Icon
        as={BsArrowDown}
        boxSize="1.5em"
        fill={colorDark}
        css={css`
          animation: arrowAnimation 1.5s infinite ease-in-out;
          @keyframes arrowAnimation {
            0% {
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `}
      />
    </VStack>
  );
};

const FeaturedProjects = ({ projects }) => {
  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <VStack
        spacing="4rem"
        w="100%"
        maxW="1200px"
        m="auto"
        px={{ base: '1rem', md: '2rem' }}
      >
        <VStack spacing="2rem" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="700"
            letterSpacing="-0.02em"
            color="purple.600"
            _dark={{ color: 'purple.300' }}
          >
            PROJECTS
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="600px"
            color="gray.600"
            _dark={{ color: 'gray.300' }}
            lineHeight="1.6"
          >
            Here you will find some of the personal and client projects that I
            created with each project containing its own case study
          </Text>
        </VStack>

        <VStack spacing="8rem" w="100%">
          {projects.map(
            (project, index) =>
              project?.title && (
                <EnhancedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              )
          )}
        </VStack>

        <NextLink href="/projects" passHref>
          <Button
            as="a"
            size="lg"
            px="3rem"
            py="1.5rem"
            fontSize="lg"
            fontWeight="600"
            bg="purple.600"
            color="white"
            _hover={{ bg: 'purple.700', transform: 'translateY(-2px)' }}
            _dark={{ bg: 'purple.500', _hover: { bg: 'purple.600' } }}
            transition="all 0.3s ease"
            borderRadius="md"
          >
            See All Projects
          </Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

const EnhancedProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
      gap={{ base: '3rem', lg: '4rem' }}
      alignItems="center"
      w="100%"
    >
      {/* Project Image/Visual */}
      <GridItem order={{ base: 1, lg: isEven ? 1 : 2 }}>
        <Box
          position="relative"
          bg="gray.100"
          borderRadius="lg"
          overflow="hidden"
          aspectRatio="16/10"
          border="1px solid"
          borderColor="gray.200"
          _dark={{ bg: 'gray.700', borderColor: 'gray.600' }}
        >
          <Center
            h="100%"
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          >
            {project.logo ? (
              project.logo
            ) : (
              <VStack spacing="1rem">
                <Heading
                  color="white"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  textAlign="center"
                  px="2rem"
                >
                  {project.title}
                </Heading>
                <Box w="3rem" h="1px" bg="white" opacity="0.8" />
              </VStack>
            )}
          </Center>
        </Box>
      </GridItem>

      {/* Project Details */}
      <GridItem order={{ base: 2, lg: isEven ? 2 : 1 }}>
        <VStack align="flex-start" spacing="2rem">
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="700"
            color="gray.900"
            _dark={{ color: 'white' }}
          >
            {project.title}
          </Heading>

          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.7"
            color="gray.600"
            _dark={{ color: 'gray.300' }}
          >
            {project.description?.split('\n')[0] || project.description}
          </Text>

          {/* Tech Stack */}
          {project.tools && project.tools.length > 0 && (
            <Box>
              <Text
                fontSize="sm"
                fontWeight="600"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
                mb="1rem"
                textTransform="uppercase"
                letterSpacing="0.1em"
              >
                Tech Stack
              </Text>
              <Flex wrap="wrap" gap="0.5rem">
                {project.tools.slice(0, 6).map((tool) => (
                  <Box
                    key={tool.id}
                    px="0.75rem"
                    py="0.25rem"
                    bg="gray.100"
                    borderRadius="md"
                    fontSize="sm"
                    fontWeight="500"
                    border="1px solid"
                    borderColor="gray.200"
                    _dark={{ bg: 'gray.700', borderColor: 'gray.600' }}
                  >
                    {tool.name}
                  </Box>
                ))}
              </Flex>
            </Box>
          )}

          {/* Action Buttons */}
          <HStack spacing="1rem" pt="1rem">
            {project.live && (
              <Button
                as="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                bg="purple.600"
                color="white"
                px="2rem"
                py="1.5rem"
                fontSize="md"
                fontWeight="600"
                transition="all 0.3s ease"
                borderRadius="md"
                _hover={{ bg: 'purple.700', transform: 'translateY(-1px)' }}
                _dark={{
                  bg: 'purple.500',
                  _hover: { bg: 'purple.600' }
                }}
              >
                Live Demo
              </Button>
            )}

            {project.repo && (
              <Button
                as="a"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                borderColor="purple.600"
                color="purple.600"
                px="2rem"
                py="1.5rem"
                fontSize="md"
                fontWeight="600"
                transition="all 0.3s ease"
                borderRadius="md"
                _hover={{
                  bg: 'purple.50',
                  transform: 'translateY(-1px)'
                }}
                _dark={{
                  borderColor: 'purple.400',
                  color: 'purple.400',
                  _hover: { bg: 'purple.900' }
                }}
              >
                View Code
              </Button>
            )}
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

const Projects = ({ projects }) => {
  return (
    <List
      mx="auto"
      justifyContent="space-between"
      display={{ base: 'block', xl: 'flex' }}
    >
      {projects.map(
        (project) =>
          project?.title && (
            <ProjectCard
              data-testid="project-card"
              logo={project.logo}
              title={project.title}
              description={project.description}
              tools={project.tools}
              live={project.live}
              proto={project.proto}
              repo={project.repo}
              key={project.id}
            />
          )
      )}
    </List>
  );
};

const FeaturedArticles = () => {
  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <FeatureHeading>Featured Articles</FeatureHeading>
      <ArticleCard />
      <ArticleCard />
      <NextLink href="/blog" passHref>
        <Link
          display="block"
          textAlign="center"
          fontSize={{ base: 'lg', lg: '2xl' }}
        >
          Read all articles
        </Link>
      </NextLink>
    </VStack>
  );
};

export const ArticleCard = () => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <Box
      mx="auto"
      p="2rem"
      border="2px solid"
      borderColor={colorGrey}
      w={{ base: '21em', lg: '57.5rem' }}
    >
      <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
        A heading for my amazing blog post
      </Heading>
      <Text variant="body" mb="2rem">
        This is some arbitrary subtitle for my amazing blog post that you should
        most definitely read!
      </Text>
      <Flex>
        <Text>Read more</Text>
        <Text>
          <span>→</span>
        </Text>
      </Flex>
    </Box>
  );
};

const FeatureHeading = ({ children }) => {
  return (
    <Heading textAlign="center" as="h2" variant="h2">
      {children}
    </Heading>
  );
};

const AboutHeading = () => {
  return (
    <Box>
      <SectionHeading mb={{ base: '4rem', xl: '4rem' }}>
        Amar Gupta
      </SectionHeading>
      <Box>
        <Heading mb="1rem" as="h3" variant="h3">
          Get to know me!
        </Heading>
        <Text mb="1.5rem" fontSize="lg">
          Hey there! I'm Amar, a self-taught developer fascinated by the
          prospect of using technology to aid in creating a fairer, more
          inclusive world.
        </Text>
        <Text mb="1.5rem" fontSize="lg">
          I like to spend my time designing and building solutions, engaging
          with the community, as well as pushing myself to learn more through
          pair programming and group projects.
        </Text>

        <Heading mb="1rem" as="h3" variant="h3">
          Development Philosophy
        </Heading>
        <Text mb="1.5rem" fontSize="lg">
          I believe in writing clean, maintainable code that not only works well
          but is also easy for other developers to understand and build upon. My
          approach focuses on user-centric design, performance optimization, and
          accessibility.
        </Text>

        <Heading mb="1rem" as="h3" variant="h3">
          When I'm Not Coding
        </Heading>
        <Text mb="1.5rem" fontSize="lg">
          You'll find me exploring new design patterns, reading tech blogs,
          experimenting with the latest frameworks, or enjoying a good beer
          while brainstorming the next big idea. I also love mentoring fellow
          developers and sharing knowledge through community involvement.
        </Text>
      </Box>
    </Box>
  );
};

const Skills = ({ skills }) => {
  return (
    <Box as="section">
      <SectionHeading mb={{ base: '4rem', xl: '4rem' }}>
        My tools
      </SectionHeading>
      <Box mb="2rem">
        <Text mb="2rem" fontSize="lg">
          Here are some of the tools and technologies I use most frequently to
          build modern web applications.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={4}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={toolsIcons[`${skill.icon}`]}
            color={skill.color?.hex}
            key={skill.id}
          />
        ))}
      </Grid>
    </Box>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      p="1rem"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      listStyleType="none"
      as="li"
    >
      <Icon
        mb="0.5rem"
        boxSize={{ base: '2.5rem', lg: '3rem' }}
        as={icon}
        fill={color}
        transitionDuration="500ms"
        css={css`
          animation: floatAnimation 3s ease-in-out infinite,
            fadeInUp 0.6s ease-out;
          animation-delay: ${Math.random() * 2}s, ${Math.random() * 0.5}s;

          @keyframes floatAnimation {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          &:hover {
            animation-play-state: paused;
            transform: scale(1.1);
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }
        `}
      />
      <Text fontSize="sm" fontWeight="medium">
        {name}
      </Text>
    </GridItem>
  );
};

const SectionHeading = ({ children, ...props }) => {
  const { colorGrey } = useColorModeSwitcher();
  return (
    <HStack {...props} w="100%">
      <Box flex="1" h="1px" bg={colorGrey} />
      <Heading textAlign="center" px="1rem" as="h3" variant="h3">
        {children}
      </Heading>
      <Box flex="1" h="1px" bg={colorGrey} />
    </HStack>
  );
};

export async function getStaticProps() {
  const props = await fetchHomePage();
  return {
    props
  };
}
