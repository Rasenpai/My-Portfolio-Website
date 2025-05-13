import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Foto from "../assets/Foto.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import { Instagram, Mail, Phone, Calendar, MapPin } from "lucide-react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Waktu animasi (ms)
      once: true, // Animasi hanya diputar sekali
    });
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-white">
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-20 items-center">
          <div
            className="introduction m-5 text-center order-2 xl:text-start xl:order-1"
            data-aos="fade-right" // AOS animation pada teks
          >
            <h1 className="text-xl font-bold xl:py-3">Hi, There👋</h1>
            <h1 className="text-4xl font-bold xl:py-3">I'm Rasena</h1>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "AI Enthusiast",
                1000,
                "Computer Network Engineering Student",
                1000,
              ]}
              wrapper="span"
              speed={300}
              style={{
                fontSize: "2rem",
                display: "inline-block",
                color: "white",
              }}
              repeat={Infinity}
              className="xl:py-5"
            />
            <p className="xl:py-5">Welcome to my personal website</p>
          </div>

          <img
            src={Foto}
            alt="foto saya"
            className="w-52 rounded-full xl:order-2"
            data-aos="zoom-in" // AOS animation pada gambar
          />
        </div>
      </div>

      {/* Contact Information Box */}
      <div className="py-16 px-6 bg-[#202020] text-white">
        <div
          className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
        >
          {/* Header */}
          <div className="bg-indigo-900 p-6">
            <h2 className="text-3xl font-bold text-center">
              Contact Information
            </h2>
          </div>

          {/* Content */}
          <div className="bg-gray-800 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-indigo-400 border-b border-indigo-800 pb-2">
                  Personal Details
                </h3>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-900 p-3 rounded-full">
                    <Mail className="text-indigo-300" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      rasrasena@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-900 p-3 rounded-full">
                    <Phone className="text-indigo-300" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+62 851-8320-0871</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-900 p-3 rounded-full">
                    <Calendar className="text-indigo-300" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Birthday</p>
                    <p className="text-white font-medium">June 28, 2008</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-900 p-3 rounded-full">
                    <MapPin className="text-indigo-300" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Bekasi, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-indigo-400 border-b border-indigo-800 pb-2">
                  Connect With Me
                </h3>

                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300 mb-6">
                    Feel free to connect with me on social media platforms for
                    updates and more content.
                  </p>

                  <div className="flex flex-col gap-4">
                    <a
                      href="https://www.instagram.com/rrssnaaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 p-3 rounded-lg transition-all duration-300"
                    >
                      <Instagram size={24} />
                      <span className="font-medium">@rrssnaaa</span>
                    </a>

                    <a
                      href="https://www.tiktok.com/@hyrasena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 p-3 rounded-lg border border-gray-600 transition-all duration-300"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-brand-tiktok"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                      <span className="font-medium">@hyrasena</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rasenaa-8786ba362/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 p-3 rounded-lg transition-all duration-300"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="font-medium">Rasena</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-indigo-900 bg-opacity-30 rounded-lg border border-indigo-800">
                  <p className="text-center text-indigo-300">
                    Let's work together on exciting projects!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
