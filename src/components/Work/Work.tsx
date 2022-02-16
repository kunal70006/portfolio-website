import useInView from "react-cool-inview";
import Slide from "react-reveal/Slide";

const Work = () => {
  const { observe, inView } = useInView();
  return (
    <section
      id="work"
      className="lg:px-96 sm:px-0 bg-black h-screen flex items-center sm:mt-40 lg:mt-0"
      ref={observe}
    >
      {inView && (
        <Slide right>
          <div className="flex flex-col lg:pl-20 ">
            <div className="flex items-center tracking-wider">
              <h1 className="text-red lg:text-2xl sm:text-xl font-bold">
                02.{" "}
                <span className="text-lightSlate">Where I&apos;ve Worked</span>
              </h1>
              <div className=" lg:ml-4 sm:ml-1 lg:w-80 sm:w-10 border-t border-slate " />
            </div>
            <div className="flex sm:flex-col lg:flex-row">
              <div className="flex flex-col lg:pl-20 mt-8 text-lg lg:w-1/2 sm:w-full">
                <h1 className="text-lightSlate font-bold">
                  Engineer{" "}
                  <a
                    className="text-red cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.cyberoisystems.com/"
                  >
                    @ CyberoiSystems (remote)
                  </a>
                </h1>
                <p className="font-mono text-xs mt-2 text-slate">
                  November 2021 - Present
                </p>
                <ul className="list-disc text-slate text-base mt-4 pl-4">
                  <li className="mb-2">
                    Write modern, performant, maintainable code for a diverse
                    array of client and internal projects
                  </li>
                  <li className="mb-2">
                    Work with a variety of different languages, platforms,
                    frameworks, and version control systems such as JavaScript,
                    TypeScript, React, NextJS, Gitlab, and Github
                  </li>
                  <li className="mb-2">
                    Communicate with multi-disciplinary teams of engineers,
                    designers, producers, and clients on a daily basis
                  </li>
                </ul>
              </div>
              <div className="flex flex-col lg:pl-20 mt-8 text-lg lg:w-1/2 sm:w-full">
                <h1 className="text-lightSlate font-bold">
                  Front-end Developer{" "}
                  <a
                    className="text-red cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/unihubindia/about/"
                  >
                    @ Unihub India (remote)
                  </a>
                </h1>
                <p className="font-mono text-xs mt-2 text-slate">
                  August - October 2020
                </p>
                <ul className="list-disc text-slate text-base mt-4 pl-4">
                  <li className="mb-2">
                    Developed and maintained code for in-house and client
                    websites primarily using HTML, CSS, Sass, JavaScript & React
                  </li>
                  <li className="mb-2">
                    Manually tested sites in various browsers and mobile devices
                    to ensure cross-browser compatibility and responsiveness
                  </li>
                  <li className="mb-2">
                    Interfaced with clients on a weekly basis, providing
                    technological expertise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </section>
  );
};

export default Work;
