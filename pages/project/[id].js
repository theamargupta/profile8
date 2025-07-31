import {
  Box,
  Container as ChakraContainer,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  List,
  ListItem,
  Grid,
  GridItem,
  Badge,
  Divider,
  Link
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Container from '@/layouts/container';
import { varriable } from '@/utils/constant';
import Icon from '@chakra-ui/icon';
import { toolsIcons } from '@/utils/icons';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import NextLink from 'next/link';
import { ContentWrapper } from '@/layouts/contentWrapper';

const ProjectCaseStudy = ({ project, socials }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container
      title={`${project.title} - Case Study | Amar Gupta`}
      socials={socials}
    >
      <ContentWrapper>
        <ProjectHeader project={project} />
        <ProjectContent project={project} />
        <ProjectNavigation project={project} />
      </ContentWrapper>
    </Container>
  );
};

const ProjectHeader = ({ project }) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();

  return (
    <Box   w={{ base: '90%', '2xl': '100%' }} mb="3rem">
      <VStack spacing="2rem" align="start">
        <NextLink href="/projects" passHref>
          <Link fontSize="sm" fontWeight="500">
            ← Back to Projects
          </Link>
        </NextLink>

        <Heading as="h1" size="2xl" fontWeight="bold">
          {project.title}
        </Heading>

        {project.demoImg && (
          <Box
            w="100%"
            maxW="800px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="2xl"
            border="1px solid"
            borderColor={colorGrey}
          >
            <Image
              src={project.demoImg}
              alt={`${project.title} screenshot`}
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </Box>
        )}

        <HStack spacing="1rem" flexWrap="wrap">
          {project.live && (
            <Button
              as="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              View Live Site
            </Button>
          )}
          {project.repo && (
            <Button
              as="a"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              View Source Code
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

const ProjectContent = ({ project }) => {
  const { colorDark, colorGrey, colorLight } = useColorModeSwitcher();

  return (
    <Box w={{ base: '90%', '2xl': '100%' }}>
      <Grid
        templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
        gap={{ base: '2rem', lg: '4rem' }}
        mb="4rem"
      >
        <GridItem>
          <VStack spacing="3rem" align="start">
            <Box>
              <Heading as="h2" size="lg" mb="1rem">
                Project Overview
              </Heading>
              <Text
                fontSize="lg"
                lineHeight="1.8"
                color="gray.600"
                _dark={{ color: 'gray.300' }}
              >
                {project.description}
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb="2rem">
                Technical Implementation
              </Heading>
              <VStack spacing="2rem" align="start">
                <Box>
                  <Text fontSize="md" fontWeight="600" mb="1rem">
                    Key Features:
                  </Text>
                  <List spacing="0.5rem" pl="1rem">
                    {getProjectFeatures(project).map((feature, index) => (
                      <ListItem
                        key={index}
                        fontSize="md"
                        color="gray.600"
                        _dark={{ color: 'gray.300' }}
                      >
                        • {feature}
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Box>
                  <Text fontSize="md" fontWeight="600" mb="1rem">
                    Architecture & Design:
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.600"
                    _dark={{ color: 'gray.300' }}
                  >
                    {getProjectArchitecture(project)}
                  </Text>
                </Box>
              </VStack>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb="2rem">
                Challenges & Solutions
              </Heading>
              <VStack spacing="1.5rem" align="start">
                {getProjectChallenges(project).map((challenge, index) => (
                  <Box key={index}>
                    <Text fontSize="md" fontWeight="600" mb="0.5rem">
                      Challenge {index + 1}: {challenge.title}
                    </Text>
                    <Text
                      fontSize="md"
                      color="gray.600"
                      _dark={{ color: 'gray.300' }}
                    >
                      {challenge.solution}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing="2rem" align="start">
            <Box w="100%">
              <Heading as="h3" size="md" mb="1rem">
                Technologies Used
              </Heading>
              <List display="flex" flexWrap="wrap" gap="0.5rem">
                {project.tools?.map(({ id, name, icon, color }) => (
                  <ListItem key={id}>
                    <Badge
                      display="flex"
                      alignItems="center"
                      gap="0.5rem"
                      px="0.75rem"
                      py="0.5rem"
                      borderRadius="md"
                      bg="gray.100"
                      _dark={{ bg: 'gray.700' }}
                    >
                      <Icon
                        as={toolsIcons[icon]}
                        boxSize="1rem"
                        color={color?.hex || 'gray.600'}
                      />
                      <Text fontSize="sm" fontWeight="500">
                        {name}
                      </Text>
                    </Badge>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Divider />

            <Box w="100%">
              <Heading as="h3" size="md" mb="1rem">
                Project Stats
              </Heading>
              <VStack spacing="1rem" align="start">
                <HStack>
                  <Text fontWeight="600">Status:</Text>
                  <Badge colorScheme="green">Live</Badge>
                </HStack>
                <HStack>
                  <Text fontWeight="600">Type:</Text>
                  <Text>{getProjectType(project)}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="600">Featured:</Text>
                  <Badge colorScheme={project.feature ? 'purple' : 'gray'}>
                    {project.feature ? 'Yes' : 'No'}
                  </Badge>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

const ProjectNavigation = ({ project }) => {
  const allProjects = varriable.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <Box
      as="section"
      mt="4rem"
      pt="2rem"
      borderTop="1px solid"
      borderColor="gray.200"
      _dark={{ borderColor: 'gray.700' }}
    >
      <HStack justify="space-between">
        <Box>
          {prevProject && (
            <NextLink href={`/project/${prevProject.id}`} passHref>
              <Link>
                <VStack align="start" spacing="0.5rem">
                  <Text fontSize="sm" color="gray.500">
                    Previous Project
                  </Text>
                  <Text fontWeight="600">{prevProject.title}</Text>
                </VStack>
              </Link>
            </NextLink>
          )}
        </Box>

        <Box>
          {nextProject && (
            <NextLink href={`/project/${nextProject.id}`} passHref>
              <Link>
                <VStack align="end" spacing="0.5rem">
                  <Text fontSize="sm" color="gray.500">
                    Next Project
                  </Text>
                  <Text fontWeight="600">{nextProject.title}</Text>
                </VStack>
              </Link>
            </NextLink>
          )}
        </Box>
      </HStack>
    </Box>
  );
};

// Helper functions to generate content based on project data
const getProjectFeatures = (project) => {
  // Use custom features if available, otherwise generate based on tools
  if (project.keyFeatures && project.keyFeatures.length > 0) {
    return project.keyFeatures;
  }

  const baseFeatures = [
    'Responsive web design',
    'Modern user interface',
    'Performance optimization'
  ];

  // Add specific features based on project tools
  const features = [...baseFeatures];

  if (project.tools?.some((tool) => tool.id === 'Next')) {
    features.push('Server-side rendering with Next.js');
    features.push('SEO optimization');
  }

  if (project.tools?.some((tool) => tool.id === 'React')) {
    features.push('Component-based architecture');
    features.push('State management');
  }

  if (project.tools?.some((tool) => tool.id === 'Supabase')) {
    features.push('Real-time database integration');
    features.push('Authentication system');
  }

  if (project.tools?.some((tool) => tool.id === 'Redux')) {
    features.push('Centralized state management');
  }

  return features;
};

const getProjectArchitecture = (project) => {
  // Use custom architecture if available
  if (project.architecture) {
    return project.architecture;
  }

  if (project.tools?.some((tool) => tool.id === 'Next')) {
    return 'Built with a modern Next.js architecture featuring server-side rendering, API routes, and optimized performance. The application follows React best practices with component-based design and efficient state management.';
  }

  if (project.tools?.some((tool) => tool.id === 'React')) {
    return 'Developed using React with a component-based architecture, ensuring maintainable and scalable code. The application implements modern React patterns and hooks for state management.';
  }

  return 'Built with modern web technologies following industry best practices for performance, maintainability, and user experience.';
};

const getProjectChallenges = (project) => {
  // Use custom challenges if available
  if (project.challenges && project.challenges.length > 0) {
    return project.challenges;
  }

  const challenges = [
    {
      title: 'Performance Optimization',
      solution:
        'Implemented code splitting, lazy loading, and optimized asset delivery to ensure fast loading times across all devices.'
    },
    {
      title: 'Cross-browser Compatibility',
      solution:
        'Thoroughly tested across different browsers and devices, implementing fallbacks and polyfills where necessary.'
    }
  ];

  if (project.tools?.some((tool) => tool.id === 'Supabase')) {
    challenges.push({
      title: 'Database Integration',
      solution:
        'Successfully integrated Supabase for real-time data handling and authentication, ensuring secure and efficient data operations.'
    });
  }

  return challenges;
};

const getProjectType = (project) => {
  if (project.title.toLowerCase().includes('ecommerce'))
    return 'E-commerce Platform';
  if (project.title.toLowerCase().includes('dashboard'))
    return 'Dashboard Application';
  if (project.title.toLowerCase().includes('portfolio'))
    return 'Portfolio Website';
  if (project.title.toLowerCase().includes('startup'))
    return 'Business Website';
  return 'Web Application';
};

export async function getStaticPaths() {
  const projects = varriable.projects;
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = varriable.projects.find((p) => p.id.toString() === params.id);
  const socials = varriable.socials;

  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project,
      socials
    }
  };
}

export default ProjectCaseStudy;
