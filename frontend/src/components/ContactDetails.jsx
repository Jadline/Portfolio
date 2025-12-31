function ContactDetails(){
    return(
        <div className="overflow-hidden transparent py-12 sm:py-16">
          
             <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/3 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        <div className="w-full flex-1">
                           <div className="flex flex-col gap-3 border-[1px] border-[#FACC15] w-fit p-4">
                             <p className="text-sm font-semibold tracking-tight text-pretty text-[#FACC15] sm:text-3xl whitespace-nowrap">
                                Reach Out
                            </p>
                            <div className="flex flex-col gap-3 text-white">
                                <p className='flex align-center gap-3'><span><img src='gmail.png' className="w-5 h-auto"/></span>njerijadline@gmail.com</p>
                                 <p className='flex align-center gap-3'><span><img src='callme.png'  className="w-5 h-auto"/></span>+254791061920</p>
                                   <p className='flex  align-center gap-3'><span><img src='linkedin.png'  className="w-5 h-auto"/></span>Jadline Njeri</p>
                            </div>
                           </div>

                        </div>
                        <div >
                           <p className='text-white leading-relaxed'> I’d love to hear from you! Whether you have a project, 
an idea, or just want to say hi, I’m always open to new opportunities and
ready to work. Let’s build something together — reach out to discuss projects, collaborations, or any web development inquiries.
</p>
 <button className="px-6 py-2 border-[2px] bg-[linear-gradient(to_right,#d9d9d9_0%,#c084fc_50%,#facc15_100%)]
 border-none outline-none font-semibold rounded-[52px] mt-6 ">
                 Available for Work
                  
                </button>

                        </div>
                    </div>

                </div>

             </div>
        </div>
    )
}
export default ContactDetails