import useInView from "react-cool-inview";
import Slide from "react-reveal/Slide";

const Work = () => {
  const { observe, inView } = useInView();
  return (
    <section
      id="work"
      className="lg:px-96 sm:px-0 bg-black min-h-screen flex items-center sm:mt-40 lg:mt-0"
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
            <div className="mb-52">
              <div className="flex sm:flex-col lg:flex-row">
                <div className="flex flex-col lg:pl-20 mt-8 text-lg lg:w-1/2 sm:w-full">
                  <h1 className="text-lightSlate font-bold">
                    Front-end Engineer{" "}
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
                    November 2021 - March 2022
                  </p>
                  <ul className="list-disc text-slate text-base mt-4 pl-4">
                    <li className="mb-2">
                      Wrote modern, performant, maintainable code for a diverse
                      array of clients and internal projects
                    </li>
                    <li className="mb-2">
                      Worked with a variety of different languages, platforms,
                      frameworks, and version control systems such as
                      JavaScript, TypeScript, React, NextJS, Gitlab, and Github
                    </li>
                    <li className="mb-2">
                      Communicated with multi-disciplinary teams of engineers,
                      designers, product managers, and clients on a daily basis
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col lg:pl-20 mt-8 text-lg lg:w-1/2 sm:w-full">
                  <h1 className="text-lightSlate font-bold">
                    Front-end Engineer{" "}
                    <a
                      className="text-red "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ The Forestta (remote)
                    </a>
                  </h1>
                  <p className="font-mono text-xs mt-2 text-slate">
                    November 2020 - November 2021
                  </p>
                  <ul className="list-disc text-slate text-base mt-4 pl-4">
                    <li className="mb-2">
                      Planned website development, converting mockups into
                      usable web components for both mobile and desktop
                      platforms with HTML, CSS, JavaScript and React.
                    </li>
                    <li className="mb-2">
                      Adhered to SEO best practices while designing sites
                    </li>
                  </ul>
                </div>
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
                    Interacted with clients on a weekly basis, providing
                    technological expertise and updates.
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
