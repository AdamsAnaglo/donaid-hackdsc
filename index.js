// This is the entry point for the Node.js/Express.js back-end when both on your computer or when we deploy to AppEngine.

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const admin = require("firebase-admin");
admin.initializeApp();

let db = admin.firestore();

// routes
const apiRoutes = require("./server/routes/api");
const authRoutes = require("./server/routes/auth");

// firebase phone auth implementation
// window.onload = function () {
//   render();
// };

function render() {
  window.recapchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
function phoneAuth(num) {
  firebase
    .auth()
    .SignInWithPhoneNumber(num, window.recapchaVerifier)
    .then(function (confirmationResult) {
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("Message sent");
    });
}

const app = express();
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

// bodyparser stuff goes here eventually
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
        ? ["https://hackdsc-donaid.appspot.com/", "https://donaid.tech"]
        : "http://localhost:3000",
  })
);
app.use(compression());
app.enable("trust proxy", 1);

app.get("/some-route", (req, res, next) => {
  res.send({ someKey: "someValue" });
});

app.post("/userAuth", (req, res) => {
  phoneAuth("1122334455");
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
