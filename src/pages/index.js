import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import Seo from "../components/seo";

const IndexPage = () => {
  return <>
    <Layout>
      <Hero />

    </Layout>;
  </>

};

export const Head = () => <Seo title />;

export default IndexPage;
