import React from "react";

import JobPost from "@/components/JobPosts";

import type { Job } from "@/types/job";

interface Props {
  jobs: Job[];
}

const HomePage = ({ jobs }: Props) => {
  return (
    <section>
      <h1>Home</h1>

      {jobs.map((job) => (
        <JobPost job={job} key={job.id} />
      ))}
    </section>
  );
};

export default HomePage;
