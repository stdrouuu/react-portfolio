import { motion } from "framer-motion";

export const About = () => {
  const fronetendSkills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind",
    "Framer",
  ];
  const backendSkills = ["Nodejs", "mySQL", "Python"];

  return (
    <div className="bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D] to-black">
      <section id="about" className="text-white  p-8">
        <h2 className="text-6xl font-bold mt-24 mb-8 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            About <span className="text-[#66FCF1]/90">Me</span>
          </motion.div>
        </h2>

        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all duration-300 ease-out"
            initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h3 className="text-2xl font-bold mb-2">🙋‍♂️ Background</h3>
            <p className="text-white/50 mb-6">
              Im an Informatics/Computer Science student at Universitas Krida
              Wacana (UKRIDA), passionate about technology and solving
              real-world
            </p>

            <div className="rounded-lg p-4 mb-4 border border-white/20">
              <code className="text-emerald-200">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-amber-300">skills</span>{" "}
                <span className="text-cyan-300">=</span>{" "}
                <span className="text-amber-400">[</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-green-200">'JavaScript'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-200">'React'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-200">'Node.js'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-green-200">'Tailwind CSS'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-200">'SQL'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-green-200">'Framer Motion'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-200">'TypeScript'</span>
                <span className="text-white">,</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-200">'Next.js</span>
                <br />
                <span className="text-amber-400">]</span>
                <span className="text-white">;</span>
              </code>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <motion.div
              className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-left">
                {" "}
                🏫 Education{" "}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
                <li>
                  <strong>
                    {" "}
                    Bachelor's Degree in Computer Science (Informatics){" "}
                  </strong>
                  <span className="text-white/50">
                    {" "}
                    <br />
                    UKRIDA University (2024-2028)
                  </span>
                </li>
                <li>
                  <strong>Relevant Coursework:</strong>
                  <br />
                  <span className="text-white/50">
                    {" "}
                    Web Development, Cloud Computing, ...
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-left">
                {" "}
                💼 Work Experience{" "}
              </h3>
              <div className="space-y-4 text-gray-300 text-left">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at ... (2025 - present){" "}
                  </h4>
                  <p>
                    <span className="text-white/50">
                      Implemented and optimized reusable front-end components
                      using modern frameworks.
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelance at UpStack (2025){" "}
                  </h4>
                  <p>
                    <span className="text-white/50">
                      Developed responsive interfaces with focus on performance
                      and maintainability.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="p-6 mt-4 rounded-xl border-white/20 border hover:-translate-y-1 transition-all duration-300 ease-out"
            initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h3 className="text-xl font-bold mb-2">🦾 Current Technologies</h3>
            <p className="text-white/50 mb-4">
              I'm proficient in a wide range of technologies and constantly
              expanding my skill.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {" "}
                  Frontend{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fronetendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="rounded-xl bg-[#66FCF1]/10 text-[#66FCF1]/90 py-1 px-3 rounded-full-text text-sm hover:bg-[#66FCF1]/20 transition-all
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {" "}
                  Backend{" "}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="rounded-xl bg-[#66FCF1]/10 text-[#66FCF1]/90 py-1 px-3 text-sm hover:bg-[#66FCF1]/20 transition-all
                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
