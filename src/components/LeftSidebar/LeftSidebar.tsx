import Image from "next/image";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col h-screen w-20 bg-black fixed justify-end items-center">
      <div
        className="mb-10 w-8"
        onClick={() => window.open("https://github.com/kunal70006", "_blank")}
      >
        <Image
          src={github}
          alt="github icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </div>
      <div
        className="mb-10 w-8"
        onClick={() =>
          window.open(
            "https://www.instagram.com/kunaaalisthisusernameavailable/",
            "_blank"
          )
        }
      >
        <Image
          src={instagram}
          alt="instagram icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </div>
      <div
        className="mb-10 w-8"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/kunaldeep-singh-3622b71b0/",
            "_blank"
          )
        }
      >
        <Image
          src={linkedin}
          alt="linkedin icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </div>
      <div className="h-40 border-l border-slate rounded-xl" />
    </div>
  );
};

export default LeftSidebar;
