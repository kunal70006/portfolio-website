import Fade from "react-reveal/Fade";

const LandingPage = () => {
  return (
    <main className="bg-black flex flex-col text-white h-screen tracking-wider lg:px-80 sm:px-0 justify-center  lg:items-start ">
      <Fade bottom>
        <p className="font-mono text-red text-lg">Hi, my name is </p>
        <h2 className="text-lightSlate lg:text-6xl sm:text-3xl font-bold leading-snug">
          Kunaldeep Singh. <br />
          <span className="text-slate"> I build things for the web.</span>
        </h2>
        <p className="text-slate lg:w-1/3 sm:w-full my-8 sm:text-base">
          I&apos;m a front-end developer with a keen sense of design and an
          unhealthy obesession with coffee & making everything pixel-perfect.
          Now that you&apos;re here, click the button below to get a surprise!
        </p>
        <button
          className="w-fit bg-transparent p-2 font-semibold font-mono tracking-wider border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red"
          onClick={() =>
            window.open(
              "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
              "_blank"
            )
          }
        >
          Click Me!
        </button>
      </Fade>
    </main>
  );
};

export default LandingPage;
