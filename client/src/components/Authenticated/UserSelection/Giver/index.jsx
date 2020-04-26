import React, { useState } from "react";
import { Form, Input } from "antd";

import {db} from "../../../Firebase";
import firebase from "../../../Firebase"

import phoneAuth from './'


const Giver = () => {
<!--     const [state, setState] = useState({
        tempInput: "",
    });
    
    function handleInpputChange(e) {
        console.log(e.target.value)
        setState({ ...state, tempInput: e.target.value})
        
    }; -->
  const [state, setState] = useState({
    temporaryInputValue: "",
  });

  function handleInputChange(e) {
    // console.log(e.target.value);
    setState({ ...state, temporaryInputValue: e.target.value });
  }
  const { temporaryInputValue } = state;

  function handleClick() {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    firebase.auth().signInWithPhoneNumber("+1 1122334455",recaptcha).then(function(e) {
      let code = prompt('Enter the verification code: ',"");
      if (code==null) return;
      e.confirm(code).then(function(results) {
        console.log(results.user,"user");
        alert("You have signed up")
      })
    })
  }



  let data = {
    username: 'testuser',
    bank_auth: false,
    phone: '1110111',
    points: '0',
    uid:'1232frewg',
  };
  
  let setDoc = db.collection('Donors').doc('testUser').set(data);

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
            <Input id="number" />
            <div id="recaptcha-container"></div>
            <button type="submit" >SendCode</button>
            <Input onChange={handleInputChange} value={temporaryInputValue} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
