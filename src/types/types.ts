import { StaticImageData } from "next/image"

export interface IProject {
    id : string
    image : StaticImageData
    title : string
    description : string
    tags : string[],
    techStack : string[],
    githubRepo? : string,
    live? : string
}