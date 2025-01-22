import { IProject } from "@/types/types";
import poster_img from "../../public/projectsImgs/poster.png"

export const projects : IProject[] = [
    {
        id: "project1",
        image: poster_img,
        title: "Poster",
        description: "A personal portfolio website to showcase my projects and skills.",
        tags: ["portfolio", "frontend", "design"],
        techStack: ["React", "Tailwind CSS", "JavaScript"],
      },
      {
        id: "project2",
        image: poster_img,
        title: "Poster",
        description: "A fully functional e-commerce platform with user authentication and payment integration.",
        tags: ["e-commerce", "backend", "fullstack"],
        techStack: ["Node.js", "Express", "MongoDB", "React"],
      },
      {
        id: "project3",
        image: poster_img,
        title: "Poster",
        description: "A task management app for personal and team use with real-time updates.",
        tags: ["productivity", "frontend", "collaboration"],
        techStack: ["React", "Redux Toolkit", "Firebase"],
      },
]