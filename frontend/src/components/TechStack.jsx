import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { SiD3Dotjs, SiPython, SiNextdotjs, SiGit, SiGithub, SiMysql, SiTailwindcss, SiFigma } from "react-icons/si";
import Logos from "./Logos";
function TechStack(){
    return (
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-24">
            <div className="flex items-center gap-2 relative">
                 <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>

                <h2 className='text-2xl font-bold  text-white py-2'>
                    Tech stack
                     
                </h2>
                 <div className="absolute bottom-0 left-8 w-32 h-[4px] bg-[#c084fc]  rounded-full"></div>
            </div>
           <Logos/>

        </section>
    )
}
export default TechStack