const Next = () => (
  <section
    id="contact"
    className="pb-48 flex flex-col items-center text-center bg-black"
  >
    <div className="flex flex-col text-center items-center">
      <p className="font-mono tracking-wider text-red text-lg">
        04. What&apos;s Next?
      </p>
      <h1 className=" text-6xl text-lightSlate font-semibold mt-2">
        Get In Touch
      </h1>
      <p className="text-lg text-slate w-1/2 mt-6">
        My inbox is always open for new oppurtunities.Whether you have a
        question or just want to say hi, I&apos;ll try my best to get back to
        you!
      </p>
      <a
        href="mailto:singhkunaldeep@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mt-8 bg-transparent p-2 font-semibold font-mono tracking-wider border-solid text-red border-2 rounded-lg transition duration-150 hover:ease-in hover:bg-red hover:text-white hover:border-red"
      >
        Say Hello
      </a>
    </div>
  </section>
);

export default Next;
