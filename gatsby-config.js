module.exports = {
  siteMetadata: {
    title: "Trackdéchets | La traçabilité des déchets en toute sécurité",
    description:
      "Trackdéchets a vocation à simplifier la gestion de vos déchets dangereux au quotidien : 0 papier, traçabilité en temps réel, informations regroupées sur un outil unique, vérification des prestataires.",
    url:
      process.env.NODE_ENV === "production"
        ? "https://mtes-mct.github.io/trackdechets-website/"
        : "http://localhost:8000",
  },
  pathPrefix: "/trackdechets-website",
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-styled-components"],
};
