import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import trackdechets from "./assets/trackdechets.png";

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export function SEO() {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(query);

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "fr" }}
      meta={[
        {
          name: "title",
          property: "og:title",
          content: title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "image",
          property: "og:image",
          content: trackdechets,
        },
      ]}
    />
  );
}
