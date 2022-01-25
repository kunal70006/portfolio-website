const Work = () => {
  return (
    <section id="work" className="pb-96 px-96 bg-black">
      <div className="flex flex-col pl-20">
        <div className="flex items-center tracking-wider">
          <h1 className="text-red text-2xl font-bold">
            02. <span className="text-lightSlate">Where I&apos;ve Worked</span>
          </h1>
          <div className=" ml-4 w-80 border-t border-slate " />
        </div>
        <div className="flex">
          <div className="flex flex-col pl-20 mt-8 text-lg w-1/2">
            <h1 className="text-lightSlate font-bold">
              Engineer{" "}
              <a
                className="text-red cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cyberoisystems.com/"
              >
                @ CyberoiSystems
              </a>
            </h1>
            <p className="font-mono text-xs mt-2 text-slate">
              November 2021 - Present
            </p>
            <ul className="list-disc text-slate text-base mt-4 pl-4">
              <li className="mb-2">
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
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
          <div className="flex flex-col pl-20 mt-8 text-lg w-1/2">
            <h1 className="text-lightSlate font-bold">
              Front-end Developer{" "}
              <a
                className="text-red cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/unihubindia/about/"
              >
                @ Unihub India
              </a>
            </h1>
            <p className="font-mono text-xs mt-2 text-slate">
              August - October 2020
            </p>
            <ul className="list-disc text-slate text-base mt-4 pl-4">
              <li className="mb-2">
                Developed and maintained code for in-house and client websites
                primarily using HTML, CSS, Sass, JavaScript & React
              </li>
              <li className="mb-2">
                Manually tested sites in various browsers and mobile devices to
                ensure cross-browser compatibility and responsiveness
              </li>
              <li className="mb-2">
                Interfaced with clients on a weekly basis, providing
                technological expertise
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
