import Kusaku from "../assets/Kusaku.png";
import PersonalWebsite from "../assets/Personal-Website.png";
import PersonalDily from "../assets/Personal-Daily.png";
import Quizzy from "../assets/Quizzy.png";

const Project = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-32 mt-10 xl:mt-40">
      <div data-aos="zoom-out-down">
        <h1 className="text-2xl text-white font-bold mb-5">
          Past Project Experience
        </h1>
        <p className="text-white font-semibold mb-5">
          Explore the projects I've worked on so far
        </p>
      </div>

      <div className="wrapper py-5 px-3 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* Kusaku */}
            <div
              className="box bg-[#252525] border border-gray-700  h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl"
              data-aos="flip-up"
            >
              <img
                src={Kusaku}
                alt="Project Screenshot"
                className="mx-auto rounded-xl w-full h-52 object-cover"
              />
              <div className="deskripsi text-sm p-5">
                <h2 className="font-bold text-lg mb-2 text-white text-center">
                  Kusaku
                </h2>
                <p className="text-white">
                  Kusaku is a modern digital wallet that helps you manage your
                  money with ease. Track spending, send and receive funds, and
                  view your balance—all in one clean, secure app.
                </p>
                <p className="text-yellow-300 mt-10 mb-5">
                  Html, Css, Javascript
                </p>
                <div className="text-right mt-5">
                  <a
                    href="https://rasenpai.github.io/E-Wallettt/dist/pages/dashboard.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/*  Personal website */}
            <div
              className="box bg-[#252525] border border-gray-700  h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl"
              data-aos="flip-down"
            >
              <img
                src={PersonalWebsite}
                alt="Project Screenshot"
                className="mx-auto rounded-xl w-full h-52 object-cover"
              />
              <div className="deskripsi text-sm p-5">
                <h2 className="font-bold text-lg mb-2 text-white text-center">
                  Portfolio Website
                </h2>
                <p className="text-white">
                  A clean and responsive portfolio site to showcase my skills,
                  projects, and profile as a web developer. Built with React and
                  Tailwind CSS.
                </p>
                <p className="text-yellow-300 mt-10 mb-5">
                  ReactJs, Tailwind, react-type-animation
                </p>
                <div className="text-right mt-5">
                  <a
                    href="https://my-portfolio-website-fawn-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/*  Personal Daily */}
            <div
              className="box bg-[#252525] border border-gray-700  h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl"
              data-aos="flip-up"
            >
              <img
                src={PersonalDily}
                alt="Project Screenshot"
                className="mx-auto rounded-xl w-full h-52 object-cover"
              />
              <div className="deskripsi text-sm p-5">
                <h2 className="font-bold text-lg mb-2 text-white text-center">
                  Personal Daily Dashboard
                </h2>
                <p className="text-white">
                  A terminal-based Python app that gives you daily updates
                  including current weather, 3 latest tech news headlines, and a
                  motivational quote. Just enter your city name, and let this
                  colorful CLI dashboard boost your day!
                </p>
                <p className="text-yellow-300 mt-10 mb-5">Python, An API</p>
                <div className="text-right mt-5">
                  <a
                    href="https://github.com/Rasenpai/Personal-Daily"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/*  Quizzy */}
            <div
              className="box bg-[#252525] border border-gray-700  h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl"
              data-aos="flip-down"
            >
              <img
                src={Quizzy}
                alt="Project Screenshot"
                className="mx-auto rounded-xl w-full h-52 object-cover"
              />
              <div className="deskripsi text-sm p-5">
                <h2 className="font-bold text-lg mb-2 text-white text-center">
                  Quizzy
                </h2>
                <p className="text-white">
                  Quizzy is a fun and engaging quiz app that lets users test
                  their knowledge on various topics. With a sleek, responsive
                  design, it offers a seamless experience and allows users to
                  track their performance. You can challenge yourself with
                  different categories and improve your quiz-taking skills. It’s
                  a great tool for both fun and learning.
                </p>
                <p className="text-yellow-300 mt-10 mb-5">
                  ReactJs, TailwindCss
                </p>
                <div className="text-right mt-5">
                  <a
                    href="https://quizzy-ruddy-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
