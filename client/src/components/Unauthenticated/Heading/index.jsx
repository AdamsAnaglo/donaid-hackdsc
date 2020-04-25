import React, { useState } from "react";
import { Menu, Modal, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Heading = () => {
  const [state, setState] = useState({
    visible: false,
    loading: false,
    isPhoneNumberAuth: false,
  });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = () => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      // fetch the Django/Twilio service to auth with their e.target.value on the Input field
      // Once it's been received and the code has been send, change the view to be
      setState({ ...state, loading: false, isPhoneNumberAuth: true });
    }, 3000);
  };

  const handleCancel = () => {
    setState({ visible: false });
  };

  const { visible, loading, isPhoneNumberAuth } = state;

  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        // get as props? isTabSelected with route?
        // defaultSelectedKeys={["1"]}
        style={{ textAlign: "center" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={showModal}>
          Log In / Register
        </Menu.Item>
        <Modal
          visible={visible}
          title="Log In / Register"
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
              block
            >
              Continue
            </Button>,
          ]}
        >
          {isPhoneNumberAuth ? (
            <h2>Hello</h2>
          ) : (
            <Form>
              <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                Please input your phone number for account verification:
              </p>
              <Form.Item
                style={{ margin: "0" }}
                name="phone"
                rules={[
                  {
                    message: "Please input your phone number!",
                    max: 10,
                    type: "string",
                  },
                ]}
              >
                <Input addonBefore={"+1"} style={{ width: "100%" }} />
              </Form.Item>
            </Form>
          )}
        </Modal>
        <Menu.Item key="3">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Heading;
