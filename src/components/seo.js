import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} {data.site.siteMetadata.title}
      </title>
    </>
  );
};

Seo.propTypes = {
  title: PropTypes.bool
}

export default Seo;
