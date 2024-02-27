import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full border border-1 border-[#a4a7a6b7] rounded-xl p-5 h-40 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.01),0px_0px_0px_1px_rgba(25,28,33,0.05)]">
      <div className="h-full flex flex-col justify-between select-none ">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">{title}</h3>
          <article>{description}</article>
        </div>
        <div className="flex gap-5 justify-end">
          <button className="flex flex-row gap-1">
            <div className="font-semibold ">github</div>
            <ArrowTopRightIcon className="flex justify-end bg-gray-200" />
          </button>

          <button className="flex flex-row gap-1">
            <div className="font-semibold ">launch</div>
            <ArrowTopRightIcon className="flex justify-end bg-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
