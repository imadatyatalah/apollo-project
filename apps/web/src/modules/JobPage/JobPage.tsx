import React from "react";

import ReactMarkdown from "react-markdown";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

const JobPage = ({ job }: Props) => {
  return (
    <section>
      <h1>{job.title}</h1>

      <ReactMarkdown>{job.description}</ReactMarkdown>
    </section>
  );
};

export default JobPage;
