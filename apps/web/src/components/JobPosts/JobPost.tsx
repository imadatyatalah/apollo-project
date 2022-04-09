import React from "react";
import Link from "next/link";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

const JobPost = ({ job }: Props) => {
  return (
    <div>
      <Link href={`/${job.company.slug}/${job.slug}`}>
        <a>
          <p>{job.title}</p>
        </a>
      </Link>
    </div>
  );
};

export default JobPost;
