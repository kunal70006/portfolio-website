import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-screen shadow-lg z-10 backdrop-blur-md text-sm text-red font-semibold justify-end py-6 font-mono tracking-widest fixed right-20">
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
