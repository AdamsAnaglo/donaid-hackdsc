import React, { Suspense } from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router-dom";
import { Spin } from "antd";
import App from "./App";
import history from "./utils/history";
import CreateRequest from "./components/Authenticated/Requests/create";
import ViewRequest from "./components/Authenticated/Requests/view";
import RequestDet from "./components/Authenticated/Requests/view/individual/RequestDet";
// import * as serviceWorker from './serviceWorker';

render(
  <Router history={history}>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <App />
    </Suspense>
    <Route path="/create" component={CreateRequest} />
    <Route path="/view" component={ViewRequest}/>
    <Route path="/request/:id" component={RequestDet} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
