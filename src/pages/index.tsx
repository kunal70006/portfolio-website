import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Next from "../components/Next/Next";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Portfolio | Kunal</title>
        <meta
          data-react-helmet="true"
          name="description"
          content="Kunaldeep Singh is a front end engineer who specializes in building exceptional digital experiences."
        />
        <link data-react-helmet="true" rel="shortcut icon" href="/k.ico" />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="Kunaldeep Singh"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Kunaldeep Singh is a front end engineer who specializes in building exceptional digital experiences."
        />
        <meta data-react-helmet="true" property="og:type" content="website" />
      </Head>
      <div className="flex bg-black">
        <LeftSidebar />
        <div className="w-full lg:mx-20 sm:mx-10">
          <Navbar />
          <LandingPage />
          <About />
          <Work />
          <Projects />
          <Next />
          <Footer />
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default Index;
