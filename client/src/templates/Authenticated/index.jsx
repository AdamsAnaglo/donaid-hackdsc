import React from "react";
import { Layout, Card, Menu } from "antd";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// Shared
import Heading from "../../components/Unauthenticated/Heading";
// Routes
import UserSelection from "../../components/Authenticated/UserSelection";
import Giver from "../../components/Authenticated/UserSelection/Giver";
import Receiver from "../../components/Authenticated/UserSelection/Receiver";
import Completion from "../../components/Authenticated/UserSelection/Completion";
import Donations from "../../components/Authenticated/UserSelection/Donations";

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
              <Link to="/user-selection">User Selection</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/auth/logout">Log Out</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/user-selection" exact component={UserSelection} />
            <Route path="/giver" exact component={Giver} />
            <Route path="/receiver" exact component={Receiver} />
            <Route path="/completion" exact component={Completion} />
            <Route path="/donations" exact component={Donations} />
          </Switch>
          {/* <div
            style={{ margin: "0 auto", textAlign: "center", width: "100vw" }}
          > */}
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
          {/* </div> */}
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default Authenticated;
