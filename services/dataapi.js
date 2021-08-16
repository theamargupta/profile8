import { GraphQLClient } from 'graphql-request';

const url =
  'https://api-ap-northeast-1.graphcms.com/v2/ckrt4mzaj1kfu01xzdth89c6z/master';
export const fetchHomePage = async () => {
  const graphcms = new GraphQLClient(url);
  const { projects, socials } = await graphcms.request(
    `
    {
      projects(where:{feature:true}){
          id
          title
          tools:skills{
            id
            name
            icon
            color{
              hex
            }
          }
          description
          repo
          live
          feature
      }
      socials {
        id
        name
        color
        href
        icon
      }
    }
  `
  );
  return { projects, socials };
};
export const fetchProjectsPage = async () => {
  const graphcms = new GraphQLClient(url);
  const { projects, socials } = await graphcms.request(
    `
    {
      projects{
          id
          title
          tools:skills{
            id
            name
            icon
            color{
              hex
            }
          }
          description
          repo
          live
          feature
      }
      socials {
        id
        name
        color
        href
        icon
      }
    }
  `
  );
  return { projects, socials };
};
export const fetchAboutPage = async () => {
  const graphcms = new GraphQLClient(url);
  const {
    linkedin,
    github,
    skills,
    socials,
    experiences
  } = await graphcms.request(
    `
    {
      skills {
        id
        name
        icon
        color {
          hex
        }
      }
      socials {
        id
        name
        color
        href
        icon
      }
      linkedin: social(where: {id: "ckse9ox48d1df0b39qvrvr9v7"}) {
        href
      }
      github: social(where: {id: "ckse9o7nkd1c70b39p7e58cmu"}) {
        href
      }
      experiences(orderBy: date_DESC) {
        id
        title
        jobTitle
        company
        duration
        location
        description
        as
        date
      }
    }
  `
  );
  return { linkedin, github, skills, socials, experiences };
};
