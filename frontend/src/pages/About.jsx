import { motion } from "framer-motion";
import StoryContent from "../components/StoryContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <>
     
      <Navbar />

      <section className="text-white py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl mt-8">
        
          <motion.div
            className="relative mb-16 flex items-center gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            <div className="absolute bottom-0 left-10 w-40 h-1 bg-purple-400 rounded-full"></div>
          </motion.div>

        
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400">
                Hi, I'm Jadline
              </h3>
              <p>
                I’m a self-taught, dedicated, and self-driven software developer
                based in Nairobi, Kenya. I am extremely ambitious and passionate
                about creating modern, responsive, and user-friendly web
                experiences. My projects showcase my ability to solve real-world
                problems through technology while keeping the user at the center.
              </p>
              <p>
                When I’m not coding, I enjoy going to the cinema, trying new
                recipes, and baking — one of my favorite hobbies. I also value
                health and fitness, and I’m constantly striving to learn and grow
                in both my professional and personal life.
              </p>
            </motion.div>

            {/* Notebook Visual */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={fadeInUp}
            >
              <img
                src="mall_analysis.png"
                alt="Mall Analysis Notebook"
                className="rounded-xl shadow-lg border-2 border-purple-400 max-w-full lg:max-w-md"
              />
            </motion.div>
          </motion.div>

         
          <motion.div
            className="mt-20 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
           
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Data Analyst Intern @ Del Monte Kenya
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Cleaned and processed pineapple plant monitoring data collected from the field</li>
                <li>Entered and managed data in the Forcing Height database</li>
                <li>Performed data analysis to identify trends and insights</li>
                <li>Generated reports based on analyzed data for decision-making</li>
              </ul>
            </motion.div>

            {/* Projects */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Data Analysis Projects
              </h3>
              <p className="mb-4">
                I have done various data analysis projects. One example is a mall analysis project you can view on my GitHub:
                <a
                  href="https://github.com/Jadline/data-analysis-101/blob/main/mall_analysis2.ipynb"
                  target="_blank"
                  className="text-purple-400 underline ml-1"
                >
                  Check it out here
                </a>
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Education
              </h3>
              <p>BSc Industrial Mathematics — Graduated with Second Class Upper Division Award</p>
            </motion.div>

           
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Interests & Skills
              </h3>
              <p>
                I have a strong interest in artificial intelligence, machine learning, and predictive modeling. I also enjoy coding, exploring new technologies, and turning ideas into interactive web experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
