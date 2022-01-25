/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      style={{ top: visible ? "0" : "-60px", transition: "top 0.6s" }}
      className="flex bg-black text-sm text-red font-semibold justify-end py-6 font-mono tracking-widest fixed right-20"
    >
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
      <Link href="#">
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
      <button className="bg-transparent font-semibold px-8  mr-10 font-mono tracking-widest border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red">
        RESUME
      </button>
    </nav>
  );
};

export default Navbar;
