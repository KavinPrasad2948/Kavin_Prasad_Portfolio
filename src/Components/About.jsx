import React from "react";
import PPng from "../assets/kavin.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import Skills from "./Skills/Skills";
import { MdOutlineDocumentScanner } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="text-white">
        <div className="flex flex-col md:flex-row items-center justify-evenly h-screen w-full">
          <div className="mb-8 md:mb-0 mt-10">
            <img
              src={PPng}
              loading="lazy"
              alt="Kavin Prasad"
              className="rounded-custom w-48 h-72 md:w-64 md:h-96 object-cover object-center shadow-lg"
            />
          </div>

          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start w-full md:w-1/2 h-full">
            <h1 className="text-2xl md:text-5xl font-semibold mb-4">
              About Me
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Fullstack Developer
            </h2>
            <p className="text-base font-medium text-black mb-4 px-4 md:px-0">
              I`m a passionate Fullstack Developer with a knack for crafting
              innovative solutions. My journey in the world of technology is
              marked by a commitment to excellence in every project. Proficient
              in a variety of technologies, I thrive on the challenge of
              creating seamless user experiences and robust backend systems.
              <br />
              <br />
              Whether it`s front-end development with cutting-edge frameworks or
              architecting resilient server-side solutions, I bring a holistic
              approach to every endeavor. My dedication to continuous learning
              ensures that I stay at the forefront of technological
              advancements.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4 mt-5 text-white">
              <Link to="/projects">
                <Button
                  variant="gradient"
                  color="light-blue"
                  className="flex gap-2 items-center"
                >
                  <FaReact className="text-lg" />
                  Projects
                </Button>
              </Link>
              <Link
                to="https://drive.google.com/file/d/1OUXQ7YbUN63_b-_wxJdVTVmJqwCr4b4h/view?usp=drive_link"
                target="_blank"
              >
                <Button
                  variant="gradient"
                  color="light-blue"
                  className="flex gap-2 items-center"
                >
                  <MdOutlineDocumentScanner className="text-lg" />
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="flex gap-8 mb-6">
            {/* GitHub Button */}
            <a
              href="https://github.com/KavinPrasad2948"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              aria-label="Connect On GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 15 15"
                className="w-5"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  fill="currentColor"
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                GitHub
              </span>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/kavin-prasad-3124211b2"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
              aria-label="Connect On LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1.1em"
                viewBox="0 0 512 512"
                strokeWidth="0"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                LinkedIn
              </span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:kavinprasad2948@gmail.com"
              className="relative group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
              aria-label="Mail Me"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-5 h-5"
              >
                <path
                  fill="#fff"
                  d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                />
                <path
                  fill="#fff"
                  d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                />
                <path
                  fill="#fff"
                  d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                />
              </svg>
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-grey-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Email
              </span>
            </a>
          </div>
          <Skills /> {/* Render the Skills component if needed */}
        </div>
      </div>
    </>
  );
};

export default About;
