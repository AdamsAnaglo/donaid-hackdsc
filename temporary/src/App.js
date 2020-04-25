import React, { lazy, useEffect } from "react";
import { configure, start, done } from "nprogress";
import "nprogress/nprogress.css";
import "./App.css";

// Auth and Unauth Templates
const Authenticated = lazy(() => import("./templates/Authenticated"));
const Unauthenticated = lazy(() => import("./templates/Unauthenticated"));

function App() {
  useEffect(() => {
    configure({ showSpinner: false, easing: "ease", speed: 500 });
    start();
    done();
  }, []);

  // Checking between Auth and Unauth.
  // By default, unauth is true. We will do a conditional check to see if the user has authenticated properly after the six-digit Twilio code has returned true/verified.
  // Need to connect to endpoint that would give me that data.

  const isAuthenticated = false;

  return (
    <div className="App">
      {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
    </div>
  );
}

export default App;
