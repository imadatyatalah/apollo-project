import React from "react";

import { gql } from "@apollo/client";

import client from "@/lib/apolloClient";

const QUERY = gql`
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

const Job = ({ job }) => {
  return (
    <section>
      <code>
        <pre>{JSON.stringify(job, null, 2)}</pre>
      </code>
    </section>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: QUERY,

    variables: {
      jobSlug: query.job,
      companySlug: query.company,
    },
  });

  return { props: { job: data.job } };
};

export default Job;
