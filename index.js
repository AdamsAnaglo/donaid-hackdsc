// This is the entry point for the Node.js/Express.js back-end when both on your computer or when we deploy to AppEngine.

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// routes
const apiRoutes = require("./server/routes/api");
const authRoutes = require("./server/routes/auth");

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

// firebase phone auth implementation
var config = firebase.initializeApp({
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    projectId: '<your-cloud-firestore-project>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-sender-id>'
});

var fb = firebase.initializeApp(config)
firebase.auth().useDeviceLanguage()
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});


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
