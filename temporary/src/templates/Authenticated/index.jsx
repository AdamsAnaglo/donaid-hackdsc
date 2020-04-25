import React from "react";
import { Layout, Card, Tooltip, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
// import { Route, Switch } from "react-router-dom";
// Shared
import Heading from "../../components/Unauthenticated/Heading";

const { Content, Footer, Header } = Layout;

const Authenticated = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            // get as props? isTabSelected with route?
            // defaultSelectedKeys={["1"]}
            style={{ textAlign: "center" }}
          >
            <Menu.Item key="1">
              <Link to="/">Selection</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/auth/logout">Log Out</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "88vh",
            }}
          >
            <h2>What Type of User Are You?</h2>
            <Button>Giver</Button>
            <Button>Receiver</Button>
          </div>
          <div
            style={{ margin: "0 auto", textAlign: "center", width: "100vw" }}
          >
            {/* <Card
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[
                <Tooltip title="Send User Money" placement="bottom">
                  <CheckCircleOutlined key="setting" />
                </Tooltip>,
                <Tooltip title="Next User" placement="bottom">
                  <CloseCircleOutlined key="edit" />
                </Tooltip>,
              ]}
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card> */}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default Authenticated;
