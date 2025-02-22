import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface IProject {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  client_repo?: string;
  server_repo?: string;
  live?: string;
}

export interface ISkill {
  name: string;
  logo: IconType;
}
