export type ExperienceItem = {
  name: string;
  date: string;
  location: string;
  description: string;
  certificateURL?: string;
  position?: string;
};

export type Project = {
  id: string;
  photo: string;
  bgPosition: string;
  title: string;
  techStack: string[];
  repo: string;
  deploy: string;
  task: string;
};
