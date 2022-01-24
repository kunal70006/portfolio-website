import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import About from "../components/About/About";
import Work from "../components/Work/Work";

const Index: NextPage = () => {
  return (
    <div className="flex ">
      <LeftSidebar />
      <div className="w-full mx-20 ">
        <Navbar />
        <LandingPage />
        <About />
        <Work />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Index;
