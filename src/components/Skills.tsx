import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

//frontend skills
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

//backend
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";

//tools
import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { RiFileUploadFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Skills(){
    
    const frontend = [{name:"html", icon: <FaHtml5 className="h-16 w-16"/>}, {name:"css", icon: <FaCss3Alt className="h-16 w-16"/>},{name:"javascript", icon: <IoLogoJavascript className="h-16 w-16"/>}, {name:"typescript", icon: <BiLogoTypescript className="h-16 w-16"/>},{name:"reactjs", icon: <RiReactjsLine className="h-16 w-16"/>}, {name:"nextjs", icon: <RiNextjsFill className="h-16 w-16"/>},{name:"tailwindcss", icon: <RiTailwindCssFill className="h-16 w-16"/>}]


    const backend = [{name:"nodejs",icon:<RiNodejsLine className="h-16 w-16"/>}, {name:"expressjs",icon:<SiExpress className="h-16 w-16"/>},{name:"mongodb",icon:<SiMongodb className="h-16 w-16"/>}, {name:"mongoose",icon:<SiMongoose className="h-16 w-16"/>},{name:"sql",icon:<TbFileTypeSql className="h-16 w-16"/>}, {name:"postgresql",icon:<BiLogoPostgresql className="h-16 w-16"/>},{name:"mysql",icon:<TbBrandMysql className="h-16 w-16"/>},]

    const tool = [{name:"cloudinary",icon:<SiCloudinary className="h-16 w-16"/>},{name:"postman",icon:<SiPostman className="h-16 w-16"/>}, {name:"multer",icon:<RiFileUploadFill className="h-16 w-16"/>},{name:"vercel",icon:<SiVercel className="h-16 w-16"/>}, {name:"git",icon:<FaGitAlt className="h-16 w-16"/>},{name:"github",icon:<FaGithub className="h-16 w-16"/>},]

    return (
        <div className="w-full dark:bg-gray-900 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            
            <h1 className="text-center text-xl">Skills</h1>

            <div className="py-10">
                <InfiniteMovingCards items={frontend} speed="fast" direction="right"/>
            </div>
            <div className="py-10">
                <InfiniteMovingCards items={backend} speed="fast" direction="left"/>
            </div>
            <div className="py-10">
                <InfiniteMovingCards items={tool} speed="fast" direction="right"/>
            </div>
        </div>
    )
}