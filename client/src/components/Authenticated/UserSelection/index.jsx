import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "antd";
import {
  InfoCircleOutlined,
  DollarCircleOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

const UserSelection = () => {
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
        <img
          src={require("../../../assets/svgs/home.svg")}
          alt="Home"
          style={{ width: "40%", height: "40%", margin: "2rem 0" }}
        />
        <h2>What Type of User Are You?</h2>
        <Link to="/giver">
          <Button
            type="primary"
            shape="round"
            icon={<DollarCircleOutlined />}
            size="large"
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              marginRight: "1rem",
            }}
          >
            Giver{" "}
          </Button>
          <Tooltip
            placement="right"
            title="Givers are individuals who are willing to donate to receivers."
          >
            <InfoCircleOutlined style={{ fontSize: "1rem" }} />
          </Tooltip>
        </Link>
        <Link to="/receiver">
          <Button
            type="primary"
            shape="round"
            icon={<MedicineBoxOutlined />}
            size="large"
            style={{ margin: "1rem 0", marginRight: "1rem" }}
          >
            Receiver{" "}
          </Button>
          <Tooltip
            placement="right"
            title="Receivers are those in need and are looking for financial help."
          >
            <InfoCircleOutlined style={{ fontSize: "1rem" }} />
          </Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default UserSelection;
