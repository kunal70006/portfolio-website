import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="lg:flex sm:hidden flex-col h-screen w-20 bg-black fixed justify-end items-center">
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kunal70006"
      >
        <Image
          src="/github.png"
          alt="github icon"
          width={32}
          height={32}
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/kunaaalisthisusernameavailable/"
      >
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={32}
          height={32}
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <a
        className="mb-10 w-8"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/kunaldeep-singh-3622b71b0/"
      >
        <Image
          src="/linkedin.png"
          width={32}
          height={32}
          alt="linkedin icon"
          className="cursor-pointer transition duration-150 hover:-translate-y-0.5"
        />
      </a>
      <div className="h-40 border-l border-slate rounded-xl" />
    </div>
  );
};

export default LeftSidebar;
