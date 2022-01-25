import Image from "next/image";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col h-screen w-20 bg-black fixed justify-end items-center">
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kunal70006"
      >
        <Image
          src={github}
          alt="github icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/kunaaalisthisusernameavailable/"
      >
        <Image
          src={instagram}
          alt="instagram icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kunaldeep-singh-3622b71b0/"
      >
        <Image
          src={linkedin}
          alt="linkedin icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <div className="h-40 border-l border-slate rounded-xl" />
    </div>
  );
};

export default LeftSidebar;
