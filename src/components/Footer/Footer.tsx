import Image from "next/image";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const Footer = () => (
  <>
    <div className="lg:hidden sm:flex md:hidden items-center justify-around">
      <a
        className="mb-4 w-8"
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
        className="mb-4 w-8"
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
        className="mb-4 w-8"
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
    </div>
    <div className="bg-black text-slate text-center cursor-pointer pb-12">
      <p>
        Inspired from{" "}
        <a
          className="hover:text-red transition duration-150 hover:ease-in"
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>{" "}
        & built by{" "}
        <a
          href="https://github.com/kunal70006"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red transition duration-150 hover:ease-in"
        >
          Kunaldeep Singh
        </a>
      </p>
    </div>
  </>
);

export default Footer;
