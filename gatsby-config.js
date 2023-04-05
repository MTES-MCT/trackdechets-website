const path = require("path");
const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://trackdechets.beta.gouv.fr/"
    : "http://localhost:8000";

module.exports = {
  siteMetadata: {
    title: "Trackdéchets | La traçabilité des déchets en toute sécurité",
    description:
      "Trackdéchets a vocation à simplifier la gestion de vos déchets dangereux au quotidien : 0 papier, traçabilité en temps réel, informations regroupées sur un outil unique, vérification des prestataires.",
    url: siteUrl,

    // Filling the following will add a banner on top of every pages
    // to inform users about an ongoing incident.
    // Note that it can contain HTML and must be set to an empty string when there is no incident.
    incident: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, "content", "pages"),
      },
    },
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `saas-partners-logos`,
        path: path.join(__dirname, "content", "partners", "saas"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `other-partners-logos`,
        path: path.join(__dirname, "content", "partners", "others"),
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: process.env.PLAUSIBLE_DOMAIN,
        customDomain: `plausible.trackdechets.beta.gouv.fr`,
      },
    },
  ],
};
