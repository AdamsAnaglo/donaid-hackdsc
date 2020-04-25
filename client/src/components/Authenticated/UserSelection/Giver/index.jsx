import React, { useState } from "react";
import { Form, Input } from "antd";

const Giver = () => {
  const [state, setState] = useState({
    temporaryInputValue: "",
  });

  function handleInputChange(e) {
    // console.log(e.target.value);
    setState({ ...state, temporaryInputValue: e.target.value });
  }

  const { temporaryInputValue } = state;

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
