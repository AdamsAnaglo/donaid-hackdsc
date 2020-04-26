import React, { useState } from "react";
import { Form, Input } from "antd";
import phoneAuth from './'

const Giver = () => {
<<<<<<< HEAD
    const [state, setState] = useState({
        tempInput: "",
    });
    
    function handleInpputChange(e) {
        console.log(e.target.value)
        setState({ ...state, tempInput: e.target.value})
        
    };
=======
  const [state, setState] = useState({
    temporaryInputValue: "",
  });

  function handleInputChange(e) {
    // console.log(e.target.value);
    setState({ ...state, temporaryInputValue: e.target.value });
  }

  const { temporaryInputValue } = state;
>>>>>>> 65b584e00c1079a521001837774fe2a76ea12884

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
<<<<<<< HEAD
            <Input id="number" />
            <div id="recaptcha-container"></div>
            <button type="submit" >SendCode</button>
=======
            <Input onChange={handleInputChange} value={temporaryInputValue} />
>>>>>>> 65b584e00c1079a521001837774fe2a76ea12884
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
