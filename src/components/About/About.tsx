import useInView from "react-cool-inview";
import Slide from "react-reveal/Slide";

const About = () => {
  const { observe, inView } = useInView();
  return (
    <section
      id="about"
      className="flex h-screen items-center lg:px-96 sm:px-0 bg-black"
      ref={observe}
    >
      {inView && (
        <Slide left>
          <div className="flex flex-col ">
            <div className="flex items-center tracking-wider">
              <h1 className="text-red lg:text-2xl sm:text-xl font-bold">
                01. <span className="text-lightSlate">About Me</span>
              </h1>
              <div className="ml-4 lg:w-80 sm:w-20 border-t border-slate " />
            </div>
            <div className="text-slate lg:w-1/2 sm:w-full mt-8 lg:text-lg sm:text-base">
              <p>
                Hola! My name is Kunal and I think making websites is pretty
                neat. I&apos;ve been interested in the art of making websites
                ever since I was a kid, back in 2020 when the pandemic started
                and all of us got way too much free time on our hands, I finally
                dove headfirst into the world of web development!{" "}
              </p>
              <p className="mt-4">
                Fast-forward to today, and I&apos;ve had the privilege of
                working at 2 start-ups during separate internships and 1
                full-time developer role. My main focus these days is learning
                Tailwind CSS & VueJS.
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
