import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      description
      slug
      company {
        id
        name
        websiteUrl
        slug
      }
      isPublished
    }
  }
`;

export const GET_JOB = gql`
  query Job($jobSlug: String!, $companySlug: String!) {
    job(input: { jobSlug: $jobSlug, companySlug: $companySlug }) {
      id
      title
      description
      slug
      company {
        id
        name
        websiteUrl
        slug
      }
      isPublished
    }
  }
`;
