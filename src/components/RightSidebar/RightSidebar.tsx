const RightSidebar = () => {
  return (
    <div className="lg:flex sm:hidden flex-col h-screen w-20 right-0 bg-black fixed justify-end items-center">
      <a
        href="mailto:kunaldeepsingh.work@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-slate transition duration-150 hover:-translate-y-0.5 tracking-wider hover:text-red rotate-90 mb-40 cursor-pointer visited:text-lightSlate"
      >
        kunaldeepsingh.work@gmail.com
      </a>
      <div className="h-40 border-l border-slate rounded-xl" />
    </div>
  );
};

export default RightSidebar;
