import { IProject } from "@/types/types";
import poster_img from "../../public/projectsImgs/poster.png"

export const projects : IProject[] = [
    {
        id: "poster",
        image: poster_img,
        title: "Poster",
        live : "https://poster-app-fontend.vercel.app/",
        client_repo : "https://github.com/mir-asif01/poster_app_frontend",
        server_repo : "https://github.com/mir-asif01/poster_app-backend",
        description: "Poster, a modern blog sharing platform.",
        tags: ["backend","frontend"],
        techStack: ["ReactJs", "Tailwind CSS", "ExpressJs","Mongoose"],
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