import ProjectCard from '@/components/cards/projectCard';
import { Project } from '@/app/lib/definitions';

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'snapshop',
      description: 'a minimal shopping card build with nextjs and postgress',
      github: 'https://github.com/manuelxantony/snapshop',
      url: 'https://snapshopz.vercel.app/',
    },
    {
      id: '2',
      title: 'project 2',
      description: 'a sample description',
      github: '',
      url: '',
    },
    {
      id: '3',
      title: 'project 3',
      description: 'a sample description',
      github: '',
      url: '',
    },
    {
      id: '4',
      title: 'project 4',
      description: 'a sample description',
      github: '',
      url: '',
    },
    {
      id: '5',
      title: 'project 5',
      description: 'a sample description',
      github: '',
      url: '',
    },
  ];

  return (
    <div className="mt-5 md:mt-10">
      <h3 className="font-bold">projects</h3>
      <div className="mt-4 ">
        {projects.map((project) => {
          return (
            <div key={project.id} className="mt-5">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
