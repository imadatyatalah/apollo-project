export type Job = {
  id: string;
  title: string;
  description: string;
  slug: string;
  company: {
    id: string;
    name: string;
    websiteUrl: string;
    slug: string;
  };
  isPublished: boolean;
};
