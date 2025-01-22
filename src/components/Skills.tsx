import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Skills(){
    
    const frontend = [{name:"html"}, {name:"css"},{name:"javascript"}, {name:"typescript"},{name:"reactjs"}, {name:"nextjs"},{name:"tailwindcss"}, {name:"shadcnUI"},{name:"aceternityUI"}]


    const backend = [{name:"nodejs"}, {name:"expressjs"},{name:"mongodb"}, {name:"mongoose"},{name:"sql"}, {name:"postgresql"},{name:"mysql"},]

    const tool = [{name:"cloudinary"},{name:"postman"},{name:"vs_code"}, {name:"multer"},{name:"vercel"}, {name:"git"},{name:"github"},]

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