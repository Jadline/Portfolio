export default function Mywork({ project}) {
  const {
    id,
    title,
    description,
    techStack,
    urls,
    image,
    
    reverse,
  } = project
  return (
    <div className="overflow-hidden transparent py-12 sm:py-16 ">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
       
        <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-16`}>
          
       
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-base/7 font-semibold text-indigo-400">Featured Project</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
             {title}
            </p>
          
             <p className="mt-6 text-lg text-[#ccd6f6] bg-gradient-to-r from-[rgba(73,63,133,0.2)] to-[rgba(56,109,127,0.2)] p-4 rounded">
          {description}
            </p>
            <div className='flex gap-8 mt-20 '>
              {urls.map((url,index) => ( <a href={url.href} target="_blank" rel="noopener noreferrer" key={index} className="px-4 py-2 border-[2px] border-[#c084fc] text-white text-sm  ">
               {url.name} &#8660;
              </a>))}
             
            </div>
          </div>

         
          <div className="flex-1 flex flex-col gap-4">
            <div className='flex gap-4 text-[#facc15]'>
             {techStack.map((item,index) => (<p key={index}>{item}</p>))}
            </div>
            <img
              alt="Product screenshot"
              src={image}
              className="w-full h-auto max-w-full rounded-xl ring-1 ring-white/10"
            />
          </div>
        </div>
       
      </div>
    </div>
  )
}
