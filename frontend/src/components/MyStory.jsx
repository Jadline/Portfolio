import StoryContent from "./StoryContent"

function MyStory(){
    return(
        <section  className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-24">
            <div className="flex items-center gap-2 relative">
                 <div className='w-2 h-2 rounded-full bg-[#c084fc]'></div>

                <h2 className='text-2xl font-bold  text-white py-2'>
                    About Me
                     
                </h2>
                 <div className="absolute bottom-0 left-8 w-32 h-[4px] bg-[#c084fc]  rounded-full"></div>
            </div>
           <StoryContent/>
            
        </section>
    )
}
export default MyStory