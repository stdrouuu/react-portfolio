import React, { useEffect } from "react";
import {
  SiFramer,
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaLemon } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiTiara, GiTShirt } from "react-icons/gi";
import {
  AiFillGithub,
  AiFillGitlab,
  AiOutlineJavaScript,
} from "react-icons/ai";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-red-300",
  },
  {
    id: 2,
    name: "Javascript",
    icon: <AiOutlineJavaScript size={100} />,
    color: "text-yellow-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-[#66FCF1]",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-green-300",
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <SiTailwindcss size={100} />,
    color: "text-blue-400",
  },
];

export const Stack = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
                filter: "blur(5px)",
              }),
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.5,
                },
              },
            }}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className="text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
