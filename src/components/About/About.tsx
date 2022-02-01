import useInView from "react-cool-inview";
import Slide from "react-reveal/Slide";

const About = () => {
  const { observe, inView } = useInView();
  return (
    <section
      id="about"
      className="flex h-screen items-center px-96 bg-black"
      ref={observe}
    >
      {inView && (
        <Slide left>
          <div className="flex flex-col ">
            <div className="flex items-center tracking-wider">
              <h1 className="text-red text-2xl font-bold">
                01. <span className="text-lightSlate">About Me</span>
              </h1>
              <div className=" ml-4 w-80 border-t border-slate " />
            </div>
            <div className="text-slate w-1/2 mt-8 text-lg">
              <p>
                Hola! My name is Kunal and I think making websites is pretty
                neat. I&apos;ve been interested in the art of making websites
                ever since I was a wee lad, back in 2020 when the pandemic
                started and all of us got way too much free time on our hands, I
                finally dove headfirst into the world of web development!{" "}
              </p>
              <p className="mt-4">
                Fast-forward to today, and I&apos;ve had the privilege of
                working at 2 start-ups during separate internships. My main
                focus these days is learning Tailwind CSS & VueJS.
              </p>
              <p className="mt-4">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <div className="flex font-mono mt-4 justify-between pl-6 text-sm ">
                <ul className="list-disc ">
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>NextJS</li>
                </ul>
                <ul className="list-disc">
                  <li>TypeScript</li>
                  <li>MUI (Material UI)</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </section>
  );
};

export default About;
