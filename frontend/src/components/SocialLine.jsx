import { FaGithub, FaLinkedin, FaTwitter,FaFacebook } from "react-icons/fa";

function SocialLine() {
  return (
    <>
     
      <div className="hidden lg:flex fixed left-20 top-8 flex-col items-center">
        <div className="w-[1.2px] h-40 bg-white rounded-xl"></div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/jadline-njeri-5a6a56178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-xl hover:text-[#c084fc] cursor-pointer" />
          </a>

          <a
            href="https://github.com/Jadline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-xl hover:text-[#c084fc] cursor-pointer" />
          </a>

          <FaTwitter className="text-white text-xl hover:text-[#c084fc] cursor-pointer" />
        </div>
      </div>

     
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
                      flex lg:hidden gap-6 bg-black/60 backdrop-blur
                      px-6 py-3 rounded-full">
        <a
          href="https://www.linkedin.com/in/jadline-njeri-5a6a56178/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-xl hover:text-[#c084fc]" />
        </a>

        <a
          href="https://github.com/Jadline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white text-xl hover:text-[#c084fc]" />
        </a>
        <a
          href="https://web.facebook.com/jaddie.elyn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-white text-xl hover:text-[#c084fc]" />
        </a>
        

        <FaTwitter className="text-white text-xl hover:text-[#c084fc]" />
      </div>
    </>
  );
}

export default SocialLine;
