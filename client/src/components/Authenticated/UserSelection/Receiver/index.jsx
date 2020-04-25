import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { usePlaidLink } from "react-plaid-link";

const Receiver = () => {
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
        <Form>
          <Form.Item>
            <h2>Receiver</h2>
            <p>We wish you the best during these uncertain times.</p>
            <p>
              Please fill out the following form along with connecting your bank
              account to receive potential payments from givers.
            </p>
            <p>
              Although you are not guaranteed any payments, if a giver decides
              to send you money, you will receive 100% of their gift. We take
              nothing for brokering the relationship.
            </p>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Button onClick={() => open()} disabled={!ready}>
              Connect your Bank Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Receiver;
