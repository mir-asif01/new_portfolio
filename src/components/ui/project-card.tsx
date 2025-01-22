import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
    id : string
    image : StaticImageData
    title : string
    description : string
    tags : string[],
    techStack : string[],
    githubRepo? : string,
    live? : string
}


const ProjectCard:React.FC<ProjectCardProps> = ({id,image,title,description,tags,techStack})=>{
    return (
        <div className="bg-gradient-to-tl from-gray-50 dark:from-gray-700 to-gray-100 dark:to-gray-800 rounded-lg shadow-md border border-green-400 border-opacity-20">
            <Image src={image} alt="project image" className="rounded-t-lg"/>
            <div className="p-5">
                <h1>{title}</h1>
                <p className="my-3">
                    {tags.map((tag,idx)=><span key={idx} className="mr-3 text-xs dark:bg-gray-500 bg-sky-400 px-2 py-1 rounded-full text-gray-800 dark:text-sky-500">{tag}</span>)}
                </p>
                <h1 className="text-md">{description}</h1>
                <p className="my-3">
                    {techStack.map((tech,idx)=><span key={idx} className="text-xs mr-2 rounded-full dark:bg-gray-500 bg-gray-200 px-2 py-1">{tech}</span>)}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard