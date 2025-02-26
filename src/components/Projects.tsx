import { projects } from "@/lib/projects";
import ProjectCard from "./ui/project-card";
import { IProject } from "@/types/types";
export default function ProjectsComponent() {
  return (
    <section className="pt-10 dark:bg-gray-900 md:container mx-auto">
      <h1 className="text-center text-xl mb-5 md:text-5xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 gap-10">
        {projects.map((project: IProject) => (
          <ProjectCard
            key={project.id}
            image={project?.image}
            title={project?.title}
            description={project?.description}
            tags={project?.tags}
            techStack={project?.techStack}
            client_repo={project?.client_repo}
            server_repo={project?.server_repo}
            live={project?.live}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
}
