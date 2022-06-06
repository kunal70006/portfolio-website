import Image from "next/image";
import github from "/public/github.png";
import proj1 from "/public/proj1.png";
import proj2 from "/public/proj2.png";
import proj3 from "/public/proj3.png";
import proj4 from "/public/proj4.png";
import proj5 from "/public/proj5.png";
import proj6 from "/public/proj6.png";

const Projects = () => {
  return (
    <section
      id="experience"
      className="flex flex-col lg:px-60 sm:px-0 justify-center tracking-wider"
    >
      <div className="flex items-center tracking-wider ">
        <h1 className="text-red lg:text-2xl sm:text-xl font-bold">
          03.{" "}
          <span className="text-lightSlate">Some Things I&apos;ve Built</span>
        </h1>
        <div className=" ml-4 lg:w-80 sm:w-10 border-t border-slate " />
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <a
          href="https://admin-dashboard-react-syncfusion.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="lg:w-full"
        >
          <Image src={proj1} alt="project 1" />
        </a>
        <div className="flex-col text-right">
          <p className="text-red">Featured Project</p>
          <a
            href="https://admin-dashboard-react-syncfusion.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              Admin Dashboard
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:ml-8 hover:drop-shadow-xl">
            <p>
              A React admin dashboard web app made to showcase syncfusion
              components like Tables, Calendar, Theming and more complete with
              various kinds of custom charts spanning across multiple pages.
            </p>
          </div>
          <div className="flex lg:ml-8 mt-4 text-sm justify-end">
            <p className="font-mono text-slate ml-4">React</p>
            <p className="font-mono text-slate ml-4">Syncfusion</p>
            <p className="font-mono text-slate ml-4">Context API</p>
            <p className="font-mono text-slate ml-4">Tailwind CSS</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/dashboard"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <div className="flex-col">
          <p className="text-red">Featured Project</p>
          <a
            href="https://crypto-tracker-react-2021.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              Crypto Tracker
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:mr-8 hover:drop-shadow-xl">
            <p>
              A React Cryptocurrency web app made with Ant Design, Redux, Rapid
              API and many more to track prices of various cryptocurrencies
              along with relevant news, charts and other statistics.
            </p>
          </div>
          <div className="flex mt-4 text-sm">
            <p className="font-mono text-slate mr-4">React</p>
            <p className="font-mono text-slate mr-4">Ant Design</p>
            <p className="font-mono text-slate mr-4">Rapid API</p>
            <p className="font-mono text-slate lg:mr-4">Redux Toolkit</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/crypto-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
        <a
          href="https://crypto-tracker-react-2021.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full"
        >
          <Image src={proj2} alt="project 2" />
        </a>
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <a
          href="https://share-me-nextjs.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full"
        >
          <Image src={proj3} alt="project 3" />
        </a>
        <div className="flex-col text-right">
          <p className="text-red">Featured Project</p>
          <a
            href="https://share-me-nextjs.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              ShareMe
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:ml-8 hover:drop-shadow-xl">
            <p>
              A NextJS web app inspired by Pinterest where you can add, delete,
              modify, categorize or comment on images posted by different users
              complete with seach functionality and Google Authentication using
              Firebase.
            </p>
          </div>
          <div className="flex sm:flex-wrap lg:ml-8 mt-4 text-sm justify-end">
            <p className="font-mono text-slate ml-4">React</p>
            <p className="font-mono text-slate ml-4">Next JS</p>
            <p className="font-mono text-slate ml-4">Typescript</p>
            <p className="font-mono text-slate ml-4">Firebase</p>
            <p className="font-mono text-slate ml-4">Tailwind CSS</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/pinterest-clone"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <div className="flex-col">
          <p className="text-red">Featured Project</p>
          <a
            href="https://better-github-profile.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              Better Github Profile
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:mr-8 hover:drop-shadow-xl">
            <p>
              A React web app made with a single goal in mind, &ldquo;Cool
              looking Github Stats.&rdquo; Built with various modern
              technologies like Next.Js, Chart.js, Tailwind CSS etc, this web
              app aims to provide a new and cool way to visualise your github
              statistics.
            </p>
          </div>
          <div className="flex sm:flex-wrap mt-4 text-sm">
            <p className="font-mono text-slate mr-4">Typescript</p>
            <p className="font-mono text-slate mr-4">Next.js</p>
            <p className="font-mono text-slate mr-4">Github Polyglot</p>
            <p className="font-mono text-slate mr-4">Chart.js</p>
            <p className="font-mono text-slate mr-4">Tailwind CSS</p>
            <p className="font-mono text-slate lg:mr-4">React Flip Move</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/github-profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
        <a
          href="https://better-github-profile.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full"
        >
          <Image src={proj4} alt="project 4" />
        </a>
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <a
          href="https://google-keep-clone-nextjs.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full"
        >
          <Image src={proj5} alt="project 5" />
        </a>
        <div className="flex-col text-right">
          <p className="text-red">Featured Project</p>
          <a
            href="https://google-keep-clone-nextjs.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              Google Keep Clone
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:ml-8 hover:drop-shadow-xl">
            <p>
              A NextJS web app inspired by Google Keep where you can add, delete
              or modify notes posted by different users complete with Google
              Authentication using Firebase.
            </p>
          </div>
          <div className="flex lg:ml-8 mt-4 sm:flex-wrap text-sm justify-end">
            <p className="font-mono text-slate ml-4">React</p>
            <p className="font-mono text-slate ml-4">Next JS</p>
            <p className="font-mono text-slate ml-4">Typescript</p>
            <p className="font-mono text-slate ml-4">Firebase</p>
            <p className="font-mono text-slate ml-4">Tailwind CSS</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/google-keep-clone"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex mt-10 justify-between mb-10">
        <div className="flex-col">
          <p className="text-red">Featured Project</p>
          <a
            href="https://google-search-clone-react.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h1 className="text-lightSlate lg:text-2xl sm:text-xl font-bold hover:text-red transition duration-150 hover:ease-in">
              Google Search Clone
            </h1>
          </a>
          <div className="bg-lightDark p-4 text-lightSlate mt-4 rounded-md drop-shadow-lg lg:mr-8 hover:drop-shadow-xl">
            <p>
              A React web app inspired by Google search using Rapid API, React
              Context and Tailwind CSS complete with a dark mode and fully
              mobile responsive.
            </p>
          </div>
          <div className="flex mt-4 text-sm">
            <p className="font-mono text-slate mr-4">React</p>
            <p className="font-mono text-slate mr-4">Rapid API</p>
            <p className="font-mono text-slate mr-4">Context API</p>
            <p className="font-mono text-slate mr-4">Tailwind CSS</p>
          </div>
          <div className="my-4">
            <a
              href="https://github.com/kunal70006/google-search-clone-react"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={github}
                alt="github icon"
                className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
        <a
          href="https://google-search-clone-react.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="w-full"
        >
          <Image src={proj6} alt="project 6" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
