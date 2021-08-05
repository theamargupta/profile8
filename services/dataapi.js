import { GraphQLClient } from 'graphql-request';

const url =
  'https://api-ap-northeast-1.graphcms.com/v2/ckrt4mzaj1kfu01xzdth89c6z/master';
export const fetchFeatureProjects = async () => {
  const graphcms = new GraphQLClient(url);
  const { projects } = await graphcms.request(
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
    }
  `
  );
  return projects
};
export const fetchProjects = async () => {
  const graphcms = new GraphQLClient(url);
  const { projects } = await graphcms.request(
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
    }
  `
  );
  return projects
};
export const fetchSkills = async () => {
  const graphcms = new GraphQLClient(url);
  const { skills } = await graphcms.request(
    `
    {
      skills{
        id
        name
        icon
        color{
          hex
        }
      }
    }
  `
  );
  return skills
};