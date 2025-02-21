import { IProject } from "@/types/types";
import poster_img from "../../public/projectsImgs/poster.png";
import protask_img from "../../public/projectsImgs/protask.png";
import projectile_img from "../../public/projectsImgs/projectile.png";

export const projects: IProject[] = [
  {
    id: "poster",
    image: poster_img,
    title: "Poster",
    live: "https://poster-app-fontend.vercel.app/",
    client_repo: "https://github.com/mir-asif01/poster_app_frontend",
    server_repo: "https://github.com/mir-asif01/poster_app-backend",
    description: "Poster, a modern blog sharing platform.",
    tags: ["backend", "frontend", "blog"],
    techStack: ["ReactJs", "ExpressJs", "Mongoose", "MongoDB"],
  },
  {
    id: "project2",
    image: protask_img,
    title: "Protask",
    live: "https://pro-task-ed52c.web.app/",
    client_repo: "https://github.com/mir-asif01/pro_task_frontend",
    server_repo: "https://github.com/mir-asif01/pro_task_backend",
    description: "Protask, a kanban style task manager with drag-drop feature",
    tags: ["task-management", "backend", "fullstack"],
    techStack: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    id: "project3",
    image: projectile_img,
    title: "Projectile",
    live: "https://projectileas.netlify.app/",
    client_repo: "https://github.com/mir-asif01/projectile-frontend",
    server_repo: "https://github.com/mir-asif01/projectile-backend",
    description:
      "A task management app for personal and team use with real-time updates.",
    tags: ["productivity", "frontend", "collaboration"],
    techStack: ["Node.js", "Express", "MongoDB", "React"],
  },
];
