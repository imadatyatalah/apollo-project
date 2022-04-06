import React from "react";

import type { NextPage } from "next";

import { GET_JOBS } from "@/graphql/queries";
import client from "@/lib/apolloClient";
import HomePage from "@/modules/HomePage/HomePage";

import type { Job } from "@/types/job";

interface Props {
  jobs: Job[];
}

const Home: NextPage<Props> = ({ jobs }) => {
  return <HomePage jobs={jobs} />;
};

export const getServerSideProps = async () => {
  const { data } = await client.query({ query: GET_JOBS });

  return { props: { jobs: data.jobs } };
};

export default Home;
