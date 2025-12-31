import Mywork from "./Mywork";
export const projects = [
   {
    id: 10,
    title: "Personal Portfolio",
    description:
      "I designed and built my own personal portfolio from scratch, showcasing my projects, skills, and experience. The website is fully responsive and interactive, providing a clean and engaging way for visitors to explore my work and get in touch with me.",
    techStack: ["React", "TailwindCSS", "Responsive Design"],
    image: "portfolio.png",
    urls : [
        {href : 'https://www.figma.com/design/ouh2dxHVBFAWiJR5Ow8Qqi/Jadline-Portfolio?t=ZWQnohGS6FMstBUn-1',name:'Figma'},



        {href:'https://github.com/Jadline/Portfolio',name : 'Github'},
        {href:'https://jad-portfolio.vercel.app/' ,name: 'Live'}
    ],
    
    reverse: true,
  },
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
    id: 7,
    title: "Deligo API",
    description:
      "Deligo is a RESTful API designed for restaurant discovery and food ordering platforms. It enables users to search for restaurants, view menus for each restaurant, discover nearby restaurants based on location, and place food orders. The project focuses on API design, data relationships, and real-world backend workflows.",
    techStack: ["MongoDB", "Express","Node",],
    image: "deligo.png",
    urls : [
        // {href : 'https://get-recipe-app-react-router.vercel.app/',name:'Live'},
        {href:'https://github.com/Jadline/DeliGo',name : 'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: true,
  },
   {
    id: 8,
    title: "MinoxidilKe",
    description:
      "Built a fully functional e-commerce website for a hair care brand selling Minoxidil-based hair growth treatments. Implemented product listing, filtering, and checkout flows with a focus on user experience and conversion optimization.",
    techStack: ["React", "TailwindCSS", "Node", "Express", "MongoDB"],
    image: "minoxidil.png",
    urls : [
        {href : 'https://www.figma.com/design/AKddKLSjtK5lgNQ56YRnDE/Ecommerce?node-id=0-1&t=ZWQnohGS6FMstBUn-1',name:'Figma'},



        {href:'https://github.com/Jadline/MinoxidilKe',name : 'Github'},
        {href:'https://minoxidilke.vercel.app/' ,name: 'Live'}
    ],
    
    reverse: false,
  },
 
    {
    id: 3,
    title: "Bridge Desk",
    description:
      "BridgeDesk is a web-based platform that helps businesses submit, track, and manage consultation or service requests with other companies. It simplifies the process of requesting professional services by centralizing communication and request management, allowing companies to focus on their core operations.",
    techStack: ["Tailwindcss", "React", "Supabase",],
    image: "serviceportal2.png",
    urls : [
        {href : 'https://service-portal-v2en.vercel.app/',name:'Live'},
        {href:'https://github.com/Jadline/Service-Portal',name : 'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: true,
  },
   {
    id: 9,
    title: "Notes Scribe API",
    description:
      "Notes Scribe API is a Node.js and MongoDB backend demonstrating role-based authentication. Users can manage their own notes, while admins can create, update, or delete notes for any user. It features JWT authentication, secure cookie sessions, and password reset functionality.",
    techStack: ["MongoDB", "Express", "Node"],
    image: "notes.png",
    urls : [
        {href : 'https://github.com/Jadline/NotesScribe',name:'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: false,
  },
   {
    id: 4,
    title: "Salon Booking App",
    description:
      "A full-stack salon booking application that enables clients to browse salon services, view prices and previous work, and book appointments online. The system captures client details, preferred stylist, booking date, and special requests, providing a smooth and user-friendly booking experience.",
    techStack: ["Tailwindcss", "React", "MongoDB",],
    image: "salon.png",
    urls : [
        {href : 'https://salon-booking-app-vert.vercel.app/',name:'Live'},
        {href:'https://github.com/Jadline/Salon-booking-app',name : 'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: true,
  },
   {
    id: 5,
    title: "Sunnyside Agency",
    description:
      "A  marketing landing page for a creative agency, built from a Frontend Mentor design challenge. The project focuses on clean layout, strong typography, and compelling visuals to communicate the agency’s services and brand message effectively.",
    techStack: ["HTML", "CSS", "Responsive Design",],
    image: "sunnyside.png",
    urls : [
        {href : 'https://sunside-landing-page.vercel.app/',name:'Live'},
        {href:'https://github.com/Jadline/React-surge/tree/main/Sunside-agency',name : 'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: false,
  },
    {
    id: 6,
    title: "Recipe App",
    description:
      "A React recipe app built as a learning project to understand React Router. The focus of the project was implementing navigation, routing structure, and page transitions rather than complex UI or features.",
    techStack: ["Css Modules", "React","React Router",],
    image: "recipe.png",
    urls : [
        {href : 'https://get-recipe-app-react-router.vercel.app/',name:'Live'},
        {href:'https://github.com/Jadline/JS-PROJECTS/tree/main/Advanced%20React/react-router-project',name : 'Github'},



        // {href:'https://github.com/G1tonga/kpi-system',name : 'Github'},
        // {href:'https://kpi-system-new.vercel.app/' ,name: 'https://kpi-system-new.vercel.app/'}
    ],
    reverse: true,
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
    reverse: false,
  },
    
    
];
function TechnicalProjects(){
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
     
            
        </section>
    )
}
export default TechnicalProjects