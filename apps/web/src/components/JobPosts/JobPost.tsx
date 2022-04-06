import React from "react";
import Link from "next/link";

import { Box, Typography } from "@mui/material";

import type { Job } from "@/types/job";

interface Props {
  job: Job;
}

const JobPost = ({ job }: Props) => {
  return (
    <Box my={2}>
      <Link href={`/${job.company.slug}/${job.slug}`}>
        <a>
          <Typography variant="h5" component="h2" fontWeight={700}>
            {job.title}
          </Typography>
        </a>
      </Link>
    </Box>
  );
};

export default JobPost;
