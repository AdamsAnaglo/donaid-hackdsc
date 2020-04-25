import React from "react";
import { Form, Input } from "antd";

const Giver = () => {
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
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Giver;
