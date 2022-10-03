import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../layout/landing";
import About from "../layout/about";
import Work from "../layout/work";
import Projects from "../layout/projects";
import Socials from "../components/socials";
import Contact from "../layout/contact";
import { mobileWidth } from "../utils/variables";
import { WindowContext } from "../components/resizer";
import { useContext } from "react";

const Home: NextPage = () => {
  const windowWidth = useContext(WindowContext);
  return (
    <>
      <Head>
        <title>Personal Portfolio - Emil Pedersen, Software Developer</title>
        <meta
          name="description"
          content="Emil Pedersen is a Software Developer who specializes in building web apps. He has professional experience within both frontend and fullstack development."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="og:title" content="Personal Portfolio - Emil Pedersen" />
        <meta
          name="og:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
        />
        <meta
          name="og:description"
          content="Emil Pedersen is a Software Developer who specializes in building web apps. He has professional experience within both frontend and fullstack development."
        />
        <meta name="og:url" content="https://personal-portfolio-next-pearl.vercel.app/" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Vue, React, Next, Node, TypeScript, PostgreSQL, MongoBD, SASS, Azure, Git, Api, Wcag, Express, Web Development, Nuxt"
        />
        <meta name="author" content="Emil Pedersen" />
        <link rel="icon" href="/ep-logo-white.ico" />
      </Head>
      <main>
        <Landing />
        <About />
        <Work />
        <Projects />
        <Contact />
        {windowWidth > mobileWidth && <Socials imageSize={{ width: 16, height: 16 }} />}
      </main>
    </>
  );
};

export default Home;
