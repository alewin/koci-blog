import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Alessio Koci",
  DESCRIPTION: "Hi, I'm Alessio Koci, a Web developer from Bologna, where I graduated in Computer Science. At the moment I'm mainly working in the Javascript world, but I'm also interested in learning Backend, DevOps and Data engineering notions.",
  EMAIL: "ko.alessio@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION:
    "A short resume of my professional experience and educational background.",
};

export const DIVING: Metadata = {
  TITLE: "Diving",
  DESCRIPTION:
    "A collection of my dive sites with notes and tutorials.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://twitter.com/alessiokoci",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/alewin",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/alessiokoci",
  },

];
