import React, { useState } from "react";
import { Menu, Modal, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Heading = () => {
  const [state, setState] = useState({
    visible: false,
    loading: false,
    isPhoneNumberAuth: false,
    hasSentToVerificationCode: false,
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
      setState({
        ...state,
        loading: false,
        hasSentToVerificationCode: true,
        isPhoneNumberAuth: true,
      });
    }, 3000);
  };

  const handleCancel = () => {
    setState({ visible: false });
  };

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
  };

  const handleAuthorization = () => {
    console.log("Handling Auth...");
  };

  const {
    visible,
    loading,
    isPhoneNumberAuth,
    hasSentToVerificationCode,
  } = state;

  const phoneNumber = "3129533107";

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
        <Menu.Item key="3">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Modal
        visible={visible}
        title="Log In / Register"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={
          hasSentToVerificationCode ? (
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={handleAuthorization}
              block
            >
              Check Verification Code
            </Button>
          ) : (
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
              block
            >
              Send Verification Code
            </Button>
          )
        }
      >
        {isPhoneNumberAuth ? (
          <div>
            <Form>
              <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Please enter the six-digit verification code sent to +1{" "}
                {formatPhoneNumber(phoneNumber)}
              </p>
              <Form.Item
                style={{ margin: "0" }}
                name="phone"
                rules={[
                  {
                    message: "Please input your six-digit verification number!",
                    max: 6,
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Example - 123456" />
              </Form.Item>
            </Form>
          </div>
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
    </div>
  );
};

export default Heading;
