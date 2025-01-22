import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

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

export interface ISkill {
    name : string
    logo : IconType
}