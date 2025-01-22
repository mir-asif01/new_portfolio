import { projects } from "@/lib/projects" 
import ProjectCard from "./ui/project-card"
export default function ProjectsComponent(){
    return (
        <section className="pt-10 dark:bg-gray-900">
            <h1 className="text-center text-xl">Projects</h1>
            <div className="grid grid-cols-1 p-7 gap-10">
                {projects.map(project=> <ProjectCard key={project.id} {...project}></ProjectCard>)}
            </div>
        </section>
    )
}