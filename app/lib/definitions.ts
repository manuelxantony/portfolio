export type Social = {
  name: string;
  icon: '';
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  github: string;
  url: string;
  roles: string[];
  isBeta: boolean;
};

export type Writeup = {
  id: string;
  title: string;
  date: string;
};
