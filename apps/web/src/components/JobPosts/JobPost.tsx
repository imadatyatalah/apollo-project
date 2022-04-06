import React from "react";
import Link from "next/link";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

const JobPost = ({ job }: Props) => {
  return (
    <Link href={`/${job.company.slug}/${job.slug}`}>
      <a>
        <div>
          <h2>{job.title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default JobPost;
