import { motion } from "framer-motion";
import profilepic from "../assets/images/profilepic2.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#0B0C10,#1F2833_35%,#45A29E_67%,#66FCF1_85%)]">
      <div
        className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
               bg-[radial-gradient(closest-side,#0B0C10_85%,#45A29E)] top-[450px]
               border-[1px] border-[#66FCF1]/30"
      />

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Brandon"
              className="w-[250px] relative z-10 rounded-full ring-white shadow-[0_0_30px_10px_rgba(255,255,255,0.3)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Brandon{" "}
              <span className="text-[#66FCF1]/90">J.S</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I'm a student who enjoys learning new things, building simple
              projects, and figuring things out through trial and error. I’m not
              an expert (yet), but I love improving little by little.
            </p>

            <div className="flex gap-4 justify-center z-10 relative">
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-[#42bfb7] rounded-full font-medium hover:bg-[#66FCF1]/40 transition-colors"
                >
                  Contact Me
                </motion.button>
              </a>

              <a href="#portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View Work
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-6">
          <ul className="flex gap-5">
            <a
              href="https://github.com/stdrouuu"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-[#7c7c7c] transition-colors"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AiFillGithub size={30} />
              </motion.div>
            </a>

            <a
              href="https://www.instagram.com/brandon._js/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-[#7c7c7c] transition-colors"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AiFillInstagram size={30} />
              </motion.div>
            </a>
          </ul>
        </div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};
