import React from "react";
import type { NextPage } from "next";

import { GET_JOB } from "@/graphql/queries";
import JobPage from "@/modules/JobPage/JobPage";
import client from "@/lib/apolloClient";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

const Job: NextPage<Props> = ({ job }) => {
  return <JobPage job={job} />;
};

export const getServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: GET_JOB,

    variables: {
      jobSlug: query.job,
      companySlug: query.company,
    },
  });

  return { props: { job: data.job } };
};

export default Job;
