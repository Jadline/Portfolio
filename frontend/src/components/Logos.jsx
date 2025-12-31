import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { 
  SiD3Dotjs, 
  SiPython, 
  SiNextdotjs, 
  SiGit, 
  SiGithub, 
  SiMysql, 
  SiTailwindcss, 
  SiFigma 
} from "react-icons/si";

 const techStack = [
  { name: "HTML5", imageSrc: 'html.png' },
  { name: "CSS3", imageSrc: 'css3.png' },
  { name: "Javascript", imageSrc: 'javascript.png' },
  { name: "React", imageSrc: 'react.png' },
  { name: "D3.js", imageSrc:'d3.png' },
  { name: "Python", imageSrc:'python.png' },
  { name: "Next.js", imageSrc:'next.png' },
  { name: "Git", imageSrc:'git.png' },
  { name: "GitHub", imageSrc:'github.png' },
  { name: "MySQL", imageSrc:"mysql.png" },
  { name: "Tailwind CSS", imageSrc:'tailwind.png' },
  { name: "Figma", imageSrc:'figma.png'},
];

export default function Logos() {
  return (
    <div className="transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
               Tools I Love Working With
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              From design systems to front-end development and backend essentials, here are the tools shaping my current journey.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
             
              <a href="#" className="text-sm font-semibold text-white hover:text-gray-200">
                Contact Me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {techStack.map((item) => (
                <div className='flex justify-between items-center bg-white/5 p-4 rounded-lg'>
                  
                <img
              alt={item.name}
              src= {item.imageSrc}
              width={104}
              height={48}
              className="max-h-12 w-full object-contain object-left"
            />
            <h2 className="text-white">{item.name}</h2>

                </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  )
}
