const LandingPage = () => {
  return (
    <main className="bg-black flex flex-col text-white h-screen tracking-wider px-80 justify-center -mt-20 ">
      <p className="font-mono text-red text-lg">Hi, my name is </p>
      <h2 className="text-lightSlate text-6xl font-bold leading-snug">
        Kunaldeep Singh. <br />
        <span className="text-slate"> I build things for the web.</span>
      </h2>
      <p className="text-slate w-1/3 my-8">
        I&apos;m a front-end developer with a keen sense of design and an
        unhealthy obesession with coffee & making everything pixel-perfect. Now
        that you&apos;re here, click the button below to get a surprise!
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
    </main>
  );
};

export default LandingPage;
