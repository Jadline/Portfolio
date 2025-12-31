import Mywork from "./Mywork"
import { Link } from "react-router-dom";
export const projects = [
  {
    id: 1,
    title: "Kpi System",
    description:
      "This project involves developing a centralized web-based KPI system for Rolling Cargo Shipping Company. The goal is to help the company track, analyze, and visualize performance metrics across departments such as marketing, sales, and transportation.",
    techStack: ["React", "TailwindCSS", "Node", "Express", "PostgreSQL"],
    image: "kpi.png",
    urls : [
        {href : 'https://www.figma.com/design/gLTFue6JnEYAnvZlgtSEQC/Centralized-KPI-System?node-id=0-1&p=f&t=TVdhRm6fIbVf8MKe-0',name:'Figma'},



        {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        {href:'https://kpi-system-new.vercel.app/' ,name: 'Live'}
    ],
    
    reverse: false,
  },
  {
    id: 2,
    title: "Bento Grid",
    description:
      "A responsive, modern bento-style grid layout built using HTML and CSS. This project focuses on mastering layout composition, grid positioning, spacing, and visual hierarchy using pure CSS. The design adapts seamlessly across devices and demonstrates strong front-end structure and styling skills.",
    techStack: ["HTML", "CSS3", "Grid", "Responsive Design"],
    image: "bento-grid.png",
    urls : [
        {href : 'https://bento-grid-ebon.vercel.app/',name:'Live'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: true,
  },
];


function Content(){
    return (
        <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-24">
             <div className="flex items-center gap-2 relative">
                 <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>

                <h2 className='text-2xl font-bold  text-white py-2'>
                    Projects
                     
                </h2>
                 <div className="absolute bottom-0 left-8 w-32 h-[4px] bg-[#c084fc]  rounded-full"></div>
            </div>
       <div>
        {projects.map((project) => (<Mywork key={project.id} project={project}/>))}
       
       </div>
        <div className='flex justify-end mt-4'>
             <Link to='/projects' className="px-6 py-2 border-[2px] bg-[#c084fc] border-none outline-none text-white rounded-lg ">
                See More Projects &#10230;
        </Link> 
        </div>
            
        </section>
    )
}
export default Content