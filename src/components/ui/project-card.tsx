import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa6";

interface ProjectCardProps {
  id?: string;
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  client_repo?: string;
  server_repo?: string;
  live?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tags,
  techStack,
  client_repo,
  server_repo,
  live,
}) => {
  return (
    <div className="bg-gradient-to-tl from-gray-50 dark:from-gray-700 to-gray-100 dark:to-gray-800 rounded-lg shadow-md border border-green-400 border-opacity-20">
      <Image src={image} alt="project image" className="rounded-t-lg" />
      <div className="p-5">
        <h1 className="font-semibold md:text-xl">{title}</h1>
        <p className="my-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="mr-3 text-xs md:text-xl dark:bg-gray-500 bg-sky-400 px-2 py-1 md:px-4 md:py-2 rounded-full text-gray-800 dark:text-sky-500"
            >
              {tag}
            </span>
          ))}
        </p>
        <h1 className="text-md md:text-xl my-3">{description}</h1>
        <p className="my-3">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs md:text-xl mr-2 rounded-full dark:bg-gray-500 bg-gray-200 px-2 py-1 md:px-4 md:py-2 "
            >
              {tech}
            </span>
          ))}
        </p>
        <div className="mt-5 flex gap-10 items-center">
          <Link
            className="bg-slate-800 text-white text-xs md:text-xl px-2 py-1 md:px-4 md:py-1 rounded-md flex items-center gap-3"
            href={live ? live : ""}
          >
            Live
            <FaGlobe />
          </Link>
          <Link
            className="bg-slate-800 text-white text-xs md:text-xl px-2 py-1 md:px-4 md:py-1 rounded-md flex items-center gap-3"
            href={client_repo ? client_repo : ""}
          >
            Client
            <FaGithub />
          </Link>
          <Link
            className="bg-slate-800 text-white text-xs md:text-xl px-2 py-1 md:px-4 md:py-1 rounded-md flex items-center gap-3"
            href={server_repo ? server_repo : ""}
          >
            Server
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
