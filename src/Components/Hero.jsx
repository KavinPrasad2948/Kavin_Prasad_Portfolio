import PPic from "../../public/mypic.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Hero = () => {
  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0">
        <p className="text-2xl font-bold text-black">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative text-white">
          I`m
          <span className="text-blue-800 ml-4 uppercase">
            Kavin Prasad K
          </span>
        </p>
        <p className="text-xl font-bold relative uppercase text-black">
          Full-Stack Developer
        </p>
        <p className="text-base font-medium w-10/12 md:w-2/3 relative text-black">
          As a Full-Stack Developer with a passion for creating innovative solutions, I excel at turning concepts into functional, elegant applications. My expertise spans both frontend and backend technologies, enabling me to build comprehensive solutions that enhance user experiences and drive efficiency. I'm dedicated to solving problems and delivering high-quality code with a focus on precision and creativity.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1YER9ZdwThM03fKFs-13fMd9QmzbjyN2I/view?usp=drive_link"
            target="_blank"
          >
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={PPic}
          loading="lazy"
          alt="Kavin Prasad K"
          className="w-52 h-52 md:w-72 md:h-72 object-cover object-center shadow-lg rounded-custom" 
        />
      </div>
    </div>
  );
};

export default Hero;
