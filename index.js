// This is the entry point for the Node.js/Express.js back-end when both on your computer or when we deploy to AppEngine.

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
// const bodyParser = require("body-parser");

const admin = require('firebase-admin');
const admin = require('firebase-admin');  
admin.initializeApp();

let db = admin.firestore();

// routes
const apiRoutes = require("./server/routes/api");
const authRoutes = require("./server/routes/auth");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

// bodyparser stuff goes here eventually

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin:
      ENV === "production"
        ? ["https://domain-name.com", "https://www.domain-name.com"]
        : "http://localhost:3000",
  })
);
app.use(compression());
app.enable("trust proxy", 1);

app.get("/some-route", (req, res, next) => {
  res.send({ someKey: "someValue" });
});

if (ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, (err) => {
  if (err) throw err;
  if (ENV === "development") {
    console.log(`🚄 Express.js Server: http://localhost:${PORT}`);
  }
});

module.exports = app;
