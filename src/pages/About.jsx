import React from "react";

import project1 from "../assets/images/proj5.png";
import project2 from "../assets/images/proj6.png";

export const About = () => {
  return (
    <section id="about" className="text-white  p-8">
      <h2 className="text-6xl  font-bold mb-8">
        About <span className="text-[#66FCF1]/90">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">🙋‍♂️ Background</h3>
          <p className="text-white/50 mb-6">
            Im an Informatics/Computer Science student at Universitas Krida
            Wacana (UKRIDA), passionate about technology and solving real-world
          </p>

          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-emerald-200">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-amber-300">skills</span>{" "}
              <span className="text-cyan-300">=</span>{" "}
              <span className="text-amber-400">[</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'JavaScript'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'React'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'Node.js'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'TailwindCSS'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'SQL'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'C#'</span>
              <span className="text-white">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-green-200">'Python'</span>
              <br />
              <span className="text-amber-400">]</span>
              <span className="text-white">;</span>
            </code>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">🏫 Education</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>
              <strong> Degree of Informatics (Computer Science) </strong> -
              UKRIDA University (2024-2028)
            </li>
            <li>
              Relevant Coursework: Data Structures, Web Development, Cloud
              Computing...
            </li>
          </ul>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">🦾 Skills</h3>
          <p className="text-white/50 mb-4">
            I'm proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </p>
          <div className="grid grid-cols-1 text-center gap-4">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-[#66FCF1] font-medium mb-1">Frontend</h4>
              <ul className="text-white/50 space-y-1 text-sm mb-1">
                <li>React/Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-[#66FCF1] font-medium mb-1">Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm mb-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Front-end
              </label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-[#66FCF1] h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Back-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-[#66FCF1] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DevOps</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-[#66FCF1] h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-5 mb-2">04. Approach</h3>
          <p className="text-white/50">
            I believe in writing clean, maintainable code and following best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 mt-5">05. Goals</h3>
            <p className="text-white/50">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
