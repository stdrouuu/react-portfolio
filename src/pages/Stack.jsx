import { useEffect } from "react";
import {
  SiFramer,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineJavaScript } from "react-icons/ai";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-red-300",
  },
  {
    id: 2,
    name: "JavaScript",
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
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={100} />,
    color: "text-cyan-400",
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs size={100} />,
    color: "text-white-400",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: <SiTypescript size={100} />,
    color: "text-blue-400",
  },
  {
    id: 7,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-green-300",
  },
  {
    id: 8,
    name: "Postman",
    icon: <SiPostman size={100} />,
    color: "text-orange-400",
  },
  {
    id: 8,
    name: "MySQL",
    icon: <SiMysql size={100} />,
    color: "text-gray-400",
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
      <h2 className="text-7xl text-gray-100 font-bold mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Stack
        </motion.div>
      </h2>
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
                y: index % 2 === 0 ? -40 : 40,
                filter: "blur(3px)",
                rotate: index % 2 === 0 ? -9 : 9,
              }),
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
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
