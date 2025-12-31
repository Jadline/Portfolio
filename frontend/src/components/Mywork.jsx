import { useState } from "react";

export default function Mywork({ project }) {
  const {
    title,
    description,
    techStack,
    urls,
    image,
    reverse,
  } = project;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden py-12 sm:py-16">
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
            <div className='flex gap-4 mt-8 flex-wrap'>
              {urls.map((url, index) => (
                <a
                  key={index}
                  href={url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border-[2px] border-[#c084fc] text-white text-sm rounded hover:bg-[#c084fc] hover:text-black transition"
                >
                  {url.name} &#8660;
                </a>
              ))}
            </div>
          </div>

        
          <div className="flex-1 flex flex-col gap-4">
            <div className='flex gap-4 flex-wrap text-[#facc15]'>
              {techStack.map((item, index) => (<p key={index}>{item}</p>))}
            </div>

          
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-700 aspect-w-4 aspect-h-3">
              {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-700" />}
              <img
                alt={title}
                src={image}
                loading="lazy"
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
