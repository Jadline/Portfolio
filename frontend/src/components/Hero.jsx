export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8  lg:flex-row lg:items-stretch lg:text-left  md:text-center md:items-center ">
        
       
        <div className="flex flex-col justify-between relative max-w-xs sm:max-w-md lg:max-w-xs
 text-center lg:text-left ">
          <p className="text-white text-lg font-semibold ">
            Jadline is a <span className="text-[#c084fc]">Web Designer</span> and an Evolving <span className="text-[#c084fc]">Software Developer</span>
          </p>
        
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1.8px] bg-white -translate-y-1/2 rounded-full"></div>
          <p className="text-gray-300 text-xs font-normal mt-2">
            She transforms imagination into functional, beautiful applications.
          </p>
        </div>

     
        <div className="flex justify-center lg:justify-start">
          <img 
            src="photo-01-grad.jpg" 
            alt="Hero" 
            loading="eager"  
            className="w-40 sm:w-60 lg:w-[20rem] h-auto object-cover rounded-full"
          />
        </div>

       
        <div className="flex flex-col justify-between items-center lg:items-end relative max-w-xs text-center lg:text-right">
          <p className="text-white text-sm lg:text-base">
            Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
          </p>
         
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1.8px] bg-white -translate-y-1/2 rounded-full"></div>
          <button className="mt-4 px-6 py-2 border-2 border-[#c084fc] text-white rounded-lg hover:bg-[#c084fc] hover:text-black transition">
            Contact me
          </button>
        </div>
      </div>
    </section>
  )
}
