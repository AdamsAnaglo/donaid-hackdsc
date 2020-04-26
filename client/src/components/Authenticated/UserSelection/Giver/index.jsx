import React, { useState } from "react";
import { Form, Input } from "antd";
import phoneAuth from './'

const Giver = () => {
    const [state, setState] = useState({
        tempInput: "",
    });
    
    function handleInpputChange(e) {
        console.log(e.target.value)
        setState({ ...state, tempInput: e.target.value})
        
    };

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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
