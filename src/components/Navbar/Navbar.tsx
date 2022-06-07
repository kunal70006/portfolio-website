import Link from "next/link";
import Fade from "react-reveal/Fade";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="lg:flex sm:hidden w-screen -mx-20 shadow-lg z-10 backdrop-blur-md text-sm text-red font-semibold justify-end py-6 font-mono tracking-widest fixed right-20">
        <Fade top>
          <Link href="#about">
            <a className="px-10 py-2">
              01.{" "}
              <span className="text-slate transition duration-150 hover:text-red">
                About
              </span>
            </a>
          </Link>
          <Link href="#work">
            <a className="px-10 py-2">
              02.{" "}
              <span className="text-slate transition duration-150 hover:text-red">
                Experience
              </span>
            </a>
          </Link>
          <Link href="#experience">
            <a className="px-10 py-2">
              03.{" "}
              <span className="text-slate transition duration-150 hover:text-red">
                Work
              </span>
            </a>
          </Link>
          <Link href="#contact">
            <a className="px-10 py-2">
              04.{" "}
              <span className="text-slate transition duration-150 hover:text-red">
                Contact
              </span>
            </a>
          </Link>
          <a
            href="/resume-kunal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent font-semibold px-8  mr-10 font-mono tracking-widest border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red"
          >
            RESUME
          </a>
        </Fade>
      </nav>
      <div
        className="w-full sm:flex md:hidden lg:hidden backdrop-blur-md flex-col items-end mt-8 cursor-pointer"
        onClick={() => setToggle(true)}
      >
        <div className="w-8 h-1 rounded-lg mb-1 bg-red" />
        <div className="w-8 h-1 rounded-lg mb-1 bg-red" />
        <div className="w-8 h-1 rounded-lg mb-1 bg-red" />
      </div>
      {toggle && (
        <nav className="w-full text-lg flex flex-col bg-lightDark h-full fixed z-50 -mt-8 items-center justify-evenly">
          <Fade bottom>
            <div
              className="flex w-full mt-4 ml-8 cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <div className="w-8 h-1 rounded-lg mb-1 bg-red rotate-45" />
              <div className="w-8 h-1 rounded-lg mb-1 bg-red -rotate-45 -ml-8" />
            </div>
            <div className="w-full text-lg flex flex-col items-center justify-evenly mr-8">
              <Link href="#about">
                <a className="my-8">
                  <span className="text-lightSlate transition duration-150 hover:text-red">
                    About
                  </span>
                </a>
              </Link>
              <Link href="#work">
                <a className="my-8">
                  <span className="text-lightSlate transition duration-150 hover:text-red">
                    Experience
                  </span>
                </a>
              </Link>
              <Link href="#">
                <a className="my-8">
                  <span className="text-lightSlate transition duration-150 hover:text-red">
                    Work
                  </span>
                </a>
              </Link>
              <Link href="#contact">
                <a className="my-8">
                  <span className="text-lightSlate transition duration-150 hover:text-red">
                    Contact
                  </span>
                </a>
              </Link>
              <button className="bg-transparent mt-8 font-semibold px-8 mb-80 font-mono tracking-widest border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red">
                RESUME
              </button>
            </div>
          </Fade>
        </nav>
      )}
    </>
  );
};

export default Navbar;
