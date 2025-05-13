import React, { useState } from "react";

const About = () => {
  const [showTechStack, setShowTechStack] = useState(true);

  const techSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Python", level: 60 },
    { name: "Node.js", level: 10 },
    { name: "Flask", level: 10 },
  ];

  // SVG icons as components
  const DesignIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-yellow-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CodeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-yellow-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ProfessionalIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-yellow-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );

  const LanguageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-yellow-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
        clipRule="evenodd"
      />
    </svg>
  );

  const LearningIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-yellow-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  );

  const otherSkills = [
    {
      category: "Development",
      icon: <CodeIcon />,
      description: "Frontend, Responsive Design, API Integration",
    },
    {
      category: "Professional",
      icon: <ProfessionalIcon />,
      description: "Project Management, Team Collaboration, Problem Solving",
    },
    {
      category: "Language",
      icon: <LanguageIcon />,
      description: "English (Beginner), Indonesian (Native)",
    },
    {
      category: "Learning",
      icon: <LearningIcon />,
      description: "Quick learner, AI & Machine Learning enthusiast",
    },
  ];

  return (
    <div className="min-h-[2000px] xl:min-h-screen xl:mt-20 py-10">
      <div className="container mx-auto p-4">
        {/* About Me Section */}
        <div
          className="bg-[#252525] border border-gray-700 rounded-lg p-6 md:p-10 mb-10"
          data-aos="fade-right"
        >
          <h1 className="text-white text-2xl md:text-3xl text-center font-bold mb-5">
            About Me
          </h1>
          <p className="text-white text-center text-sm md:text-base">
            Hi everyone! My name is Rasena, and I'm a web developer from Bekasi,
            West Java. Passionate about creating functional, user-friendly
            websites. I work with React, Tailwind CSS, and Python to build both
            front-end and back-end solutions. Additionally, I use Flask and
            Node.js to develop efficient, scalable applications. I believe
            programming is an art, where every line of code serves a purpose by
            blending logic and creativity. If you're looking for a website
            that's not only functional but also visually appealing, feel free to
            reach out!
            <br />
            <br />I am always eager to learn new technologies and improve my
            skills, especially in the field of Artificial Intelligence and
            Machine Learning. I believe in continuous growth and stay updated
            with the latest trends in web development and AI. With a strong
            foundation in both technical skills and creativity, I am confident
            in my ability to turn ideas into practical and engaging digital
            experiences. If you're looking for a web developer with a passion
            for innovation, I'd be happy to collaborate on your project.
          </p>
        </div>

        {/* Skills Section */}
        <div
          className="bg-[#252525] border border-gray-700 rounded-lg p-6 md:p-10 mb-10"
          data-aos="fade-left"
        >
          <h1 className="text-white text-2xl md:text-3xl text-center font-bold mb-5">
            Skills
          </h1>
          <div className="flex justify-center gap-5 mb-6">
            <button
              onClick={() => setShowTechStack(true)}
              className={
                showTechStack
                  ? "bg-yellow-700 text-yellow-300 p-3 font-bold rounded hover:text-white cursor-pointer"
                  : "text-gray-300 p-3 hover:text-white cursor-pointer"
              }
            >
              Tech Stack
            </button>
            <button
              onClick={() => setShowTechStack(false)}
              className={
                !showTechStack
                  ? "bg-yellow-700 text-yellow-300 p-3 font-bold rounded hover:text-white cursor-pointer"
                  : "text-gray-300 p-3 hover:text-white cursor-pointer"
              }
            >
              Other Skills
            </button>
          </div>

          {/* Skills Content */}
          {showTechStack ? (
            <div className="space-y-6">
              {techSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 md:w-32 text-white">{skill.name}</div>
                  <div className="flex-1 h-6 bg-gray-700 rounded">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-700 rounded flex items-center"
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="px-2 text-xs font-medium text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 flex flex-col items-center text-center"
                >
                  {skill.icon}
                  <h3 className="text-white text-lg font-bold mt-3">
                    {skill.category}
                  </h3>
                  <p className="text-gray-300 mt-2">{skill.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Playlist Section */}
        <div className="flex flex-col items-center gap-5 md:gap-10">
          <h1 className="text-white text-lg md:text-xl">
            Check out my playlist!
          </h1>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7ngdoExKyaa01bQsPo6cir?utm_source=generator&theme=0"
            width="100%"
            height="352"
            className="max-w-xl"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            data-aos="flip-up"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
