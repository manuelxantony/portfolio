'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { openURLInNewTab } from '@/app/lib/utils';
import { Project } from '@/app/lib/definitions';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full border border-1 border-[#a4a7a6b7] rounded-xl p-5 h-40 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.01),0px_0px_0px_1px_rgba(25,28,33,0.05)] hover:border-2">
      <div className="h-full flex flex-col justify-between select-none ">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">{project.title}</h3>
          <h5 className="font-light">{project.description}</h5>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            {project.roles.map((role, index) => {
              return (
                <div key={index} className="hashtag">
                  #{role}
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 justify-end">
            <button
              className="flex flex-row gap-1"
              onClick={() => {
                openURLInNewTab(project.github);
              }}
            >
              <div className="font-semibold ">github</div>
              <ArrowTopRightIcon className="flex justify-end bg-gray-200" />
            </button>

            <button
              className="flex flex-row gap-1"
              onClick={() => {
                openURLInNewTab(project.url);
              }}
            >
              <div className="font-semibold ">launch</div>
              <ArrowTopRightIcon className="flex justify-end bg-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
