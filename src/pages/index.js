import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Seo from "../components/seo";

const IndexPage = () => {
  return <>
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Link to="/cv" />
    </Layout>;
  </>
}

export const Head = () => <Seo title />;

export default IndexPage;
