import React from "react";

import type { NextPage } from "next";

import { gql } from "@apollo/client";

import client from "@/lib/apolloClient";
import JobPost from "@/components/JobPosts";

import type { Job } from "@/types/job";

const QUERY = gql`
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

interface Props {
  jobs: Job[];
}

const Home: NextPage<Props> = ({ jobs }) => {
  return (
    <section>
      <h1>Home</h1>

      {jobs.map((job) => (
        <JobPost job={job} key={job.id} />
      ))}
    </section>
  );
};

export const getServerSideProps = async () => {
  const { data } = await client.query({ query: QUERY });

  return { props: { jobs: data.jobs } };
};

export default Home;
