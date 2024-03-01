import ProjectCard from '@/components/cards/projectCard';
import { projects } from '@/app/lib/data';

export default function Projects() {
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
