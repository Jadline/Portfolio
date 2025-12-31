import { CheckCircleIcon } from '@heroicons/react/20/solid'
import DotSquare from './DotSquare'
import { Link } from 'react-router-dom'



export default function StoryContent() {
  return (
    <div className="overflow-hidden transparent py-12 sm:py-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/3 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
           
            <div className="w-full flex-1">
              <h2 className="text-lg font-semibold tracking-tight text-pretty text-white sm:text-5xl whitespace-nowrap">
                 <span>Hey there,</span>
                 I am Jadline
              </h2>
              <div className="mt-6 text-lg/8 text-pretty text-white break-words max-w-[28rem] ">
                {/* <span>
                    Hey there,I am Jadline
                </span> */}
                <br/>

<p className='mt-4 text-sm'>I’m a self-taught evolving software developer based in Nairobi, Kenya. Am passionate about creating responsive websites from scratch and transforming them into modern, user-friendly web experiences. 
</p>
<p className='mt-8 text-sm'>
    I love turning ideas into interactive experiences, combining clean code with thoughtful design.My projects showcase my ability to solve real-world problems through technology while keeping the user experience at the heart of my work.
</p>
              </div>
            
              <div className="mt-10 flex">
                <Link to='/about' className="px-6 py-2 border-[2px] bg-[#c084fc] border-none outline-none text-white rounded-lg ">
                  More About Me &#10230;
                
                </Link>
              </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-12  p-4'>
                <DotSquare/>
                <div></div>
                <DotSquare/>

                <div></div>
                <DotSquare/>
                <div></div>

             
                <DotSquare/>
                <div></div>
                <DotSquare/>
               
            </div>
            
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
      </div>
    </div>
  )
}
