const express = require("express");
const helmet = require("helmet");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(
  helmet({
    frameguard: {
      action: "deny",
    },
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", "formations.data.gouv.fr"],
        baseUri: "'self'",
        fontSrc: ["'self'", "https:", "data:"],
        frameAncestors: "'none'",
        frameSrc: [
          "youtube.com",
          "www.youtube.com",
          "*.sibforms.com",
          "*.trackdechets.beta.gouv.fr",
        ],
        imgSrc: ["'self'", "data:"],
        scriptSrc: ["'self'", "'unsafe-inline'", "stats.data.gouv.fr"],
        styleSrc: ["'self'", "https:", "'unsafe-inline'"],
      },
    },
  })
);

const directory = "/" + (process.env.STATIC_DIR || "public");
app.use(express.static(__dirname + directory));

const pathToIndex = path.join(__dirname, directory, "index.html");

const indexContent = fs.readFileSync(pathToIndex, "utf8");

app.get("/*", function (req, res) {
  res.send(indexContent);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Trackdechets website listening on", port);
});
