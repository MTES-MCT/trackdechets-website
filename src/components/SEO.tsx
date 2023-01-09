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
        url
      }
    }
  }
`;

export function SEO() {
  const {
    site: {
      siteMetadata: { title, description, url },
    },
  } = useStaticQuery(query);
  const image = new URL(trackdechets, url).href;

  // csp are handled in server.js
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "fr" }}
      meta={[
        {
          name: "icon",
          href: "static/favicon.ico",
        },
        {
          name: "title",
          property: "og:title",
          content: title,
        },
        {
          name: "description",
          property: "og:description",
          content: description,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "http-equiv": "X-Content-Type-Options",
          content: "nosniff",
        },
        {
          "http-equiv": "X-XSS-Protection",
          content: "0",
        },
        {
          "http-equiv": "Strict-Transport-Security",
          content: "max-age=31536000",
        },
      ]}
    />
  );
}
