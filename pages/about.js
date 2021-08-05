import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link,
  Flex
} from '@chakra-ui/layout';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Container from '@/layouts/container';
import * as tool from '@/data/tools';
import Icon from '@chakra-ui/icon';
import { useColorModeSwitcher } from '@/utils/hooks/useColorModeSwitcher';
import useToggle from '@/utils/hooks/useToggle';
import { linkedin, github } from '@/data/socials';
import ContactForm from '@/components/contactForm';
import { ContentWrapper } from '@/layouts/contentWrapper';
import { fetchSkills } from '@/services/dataapi';
import { toolsIcons } from '@/utils/icons';

const About = ({ skills }) => {
  return (
    <Container title="About | Amar Gupta">
      <ContentWrapper>
        <AboutHeading />
        <Skills skills={skills} />
        <ExperienceHeading/>
        <Contact />
      </ContentWrapper>
    </Container>
  );
};
const AboutHeading = () => {
  return (
    <Box>
      <Heading mb="6.5rem" w={{ base: '90%', sm: '100%' }} as="h1" variant="h1">
        About
      </Heading>
      <ChakraContainer maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
        <Heading mb="0.5rem" as="h3" variant="h3">
          Background
        </Heading>
        <Text mb="2rem">
          Hey there! I’m Amar, a self-taught developer fascinated by the
          prospect of using technology to aid in creating a fairer, more
          inclusive world.
        </Text>
        <Text mb="2rem">
          I like to spend my time designing and building solutions, engaging
          with the community, as well as pushing myself to learn more through
          pair programming and group projects.
        </Text>
      </ChakraContainer>
    </Box>
  );
};
const ExperienceHeading = () => {
  return (
    <Box w="90%" alignSelf="center" as="section">
      <SectionHeading mb={{ base: '4rem', xl: '8rem' }}>
        Experience
      </SectionHeading>
      <ChakraContainer maxW={{ base: '20rem', sm: '30rem', md: '40rem' }} p={0}>
        <Tabs align="start" orientation="vertical">
          <TabList>
            <Tab>Les Transformations</Tab>
            <Tab>LoudCloud Systems</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraContainer>
    </Box>
  );
};

const Skills = ({ skills }) => {
  // convert object properties to array for mapping
  // const skills = Object.values(tool).slice(0, 12);
  return (
    <Box w="90%" alignSelf="center" as="section">
      <SectionHeading mb={{ base: '4rem', xl: '8rem' }}>
        Tools & Technologies
      </SectionHeading>
      <ChakraContainer
        maxW={{ base: '20rem', sm: '30rem', md: '40rem' }}
        textAlign="center"
        p={0}
      >
        <Text mb="8rem">
          One of my favourite things since I starting to learn to code has
          discovering all of the amazing tools and abstractions developers have
          created to make theirs and other developers' lives easier. Here are
          some of the tools I use most frequently.
        </Text>
      </ChakraContainer>
      <Grid
        m="auto"
        // w={{ md: '80%' }}
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={6}
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
      p={{ base: '0.5rem', '2xl': '1rem' }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};

const Contact = () => {
  const { themed } = useColorModeSwitcher();
  return (
    <Box id="contact" p={{ base: '1rem', md: 0 }} as="section">
      <SectionHeading mb="4rem">Get in touch</SectionHeading>
      <Flex
        borderRadius="md"
        direction={{ base: 'column', xl: 'row' }}
        m="auto"
        p="4rem"
      >
        <ChakraContainer
          m={{ base: '0 0 4rem 0', xl: '0 4rem 0 0' }}
          maxW="20rem"
          p={0}
        >
          <Text mb="1rem" variant="preTitle">
            Let's chat!
          </Text>
          <Text mb="2rem">
            If you have any questions, opportunities or would just like to say
            hey then feel free to fill out my contact form and I'll endeavour to
            get back to you as soon as I can.
          </Text>
          <Text>
            Or if you would prefer to, you can also reach me on{' '}
            <Link color={themed} href={linkedin.href}>
              linkedin
            </Link>{' '}
            {`and `}
            <Link color={themed} href={github.href}>
              github
            </Link>
            .
          </Text>
        </ChakraContainer>
        <ContactForm />
      </Flex>
    </Box>
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
  const skills = await fetchSkills();
  return {
    props: {
      skills
    }
  };
}
export default About;
