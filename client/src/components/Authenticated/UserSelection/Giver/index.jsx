import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import { usePlaidLink } from "react-plaid-link";

import { db } from "../../../Firebase";
import firebase from "../../../Firebase";

// import phoneAuth from "./";

const Giver = () => {
  const [state, setState] = useState({
    temporaryInputValue: "",
  });

  function handleInputChange(e) {
    // console.log(e.target.value);
    setState({ ...state, temporaryInputValue: e.target.value });
  }
  const { temporaryInputValue } = state;

  function handleClick() {
    console.log(temporaryInputValue)
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    firebase.auth().signInWithPhoneNumber(temporaryInputValue,recaptcha).then(function(e) {
      let code = prompt('Enter the verification code: ',"");
      if (code==null) return;
      console.log(e.results)
      console.log(e.target)

      e.confirm(code).then(function(results) {
        console.log(results.user,"user");
        alert("You have signed up")
      })
    })
  }

  let data = {
    username: "testuser",
    bank_auth: false,
    phone: "1110111",
    points: "0",
    uid: "1232frewg",
  };

  let setDoc = db.collection("Donors").doc("testUser").set(data);

  const onSuccess = useCallback(
    (token, metadata) => console.log("onSuccess", token, metadata),
    []
  );

  const onEvent = useCallback(
    (eventName, metadata) => console.log("onEvent", eventName, metadata),
    []
  );

  const onExit = useCallback(
    (err, metadata) => console.log("onExit", err, metadata),
    []
  );

  const config = {
    clientName: "DonAid",
    env: "sandbox",
    product: ["auth", "transactions"],
    publicKey: "bf8219417c517606bf8d123db7b7bd",
    // token: "",
    language: "en",
    onSuccess,
    onEvent,
    onExit,
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "88vh",
        }}
      >
        <Form action="/userAuth" method="POST">
          <Form.Item>
            {/* <Input id="number" /> */}
            {/* <div id="recaptcha-container"></div>
            <button type="submit">SendCode</button> */}
            <Input
              onChange={handleInputChange}
              value={temporaryInputValue}
              placeholder="Username"
            />
            <div id="recaptcha"></div>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  handleClick();
                }}
                disabled={!ready}
              >
                Start reCaptcah
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  open();
                }}
                disabled={!ready}
              >
                Connect you Bank Account
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
