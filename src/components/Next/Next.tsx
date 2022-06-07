import useInView from "react-cool-inview";
import Fade from "react-reveal/Fade";

const Next = () => {
  const { observe, inView } = useInView();
  return (
    <section
      id="contact"
      className=" justify-center h-screen flex flex-col items-center text-center bg-black"
      ref={observe}
    >
      {inView && (
        <Fade bottom>
          <div className="flex flex-col text-center items-center">
            <p className="font-mono tracking-wider text-red lg:text-lg sm:text-sm">
              04. What&apos;s Next?
            </p>
            <h1 className="lg:text-6xl sm:text-3xl text-lightSlate font-semibold mt-2">
              Get In Touch
            </h1>
            <p className="text-lg text-slate lg:w-1/2 sm:w-full mt-6">
              My inbox is always open for new oppurtunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back
              to you!
            </p>
            <a
              href="mailto:kunaldeepsingh.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit mt-8 bg-transparent p-2 font-semibold font-mono tracking-wider border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red"
            >
              Say Hello
            </a>
          </div>
        </Fade>
      )}
    </section>
  );
};

export default Next;
