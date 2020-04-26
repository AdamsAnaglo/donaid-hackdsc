import React, { useState } from "react";
import { Form, Input } from "antd";
import {db} from "../../../Firebase";

const Giver = () => {
  const [state, setState] = useState({
    temporaryInputValue: "",
  });

  function handleInputChange(e) {
    // console.log(e.target.value);
    setState({ ...state, temporaryInputValue: e.target.value });
  }

  const { temporaryInputValue } = state;

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
        <Form>
          <Form.Item>
            <Input onChange={handleInputChange} value={temporaryInputValue} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
