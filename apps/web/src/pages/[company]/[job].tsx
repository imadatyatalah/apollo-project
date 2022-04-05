import React from "react";
import type { NextPage } from "next";

import { gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import client from "@/lib/apolloClient";

import type { Job } from "@/types/job";

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

interface Props {
  job: Job;
}

const Job: NextPage<Props> = ({ job }) => {
  return (
    <section>
      <h1>{job.title}</h1>

      <ReactMarkdown>{job.description}</ReactMarkdown>
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
