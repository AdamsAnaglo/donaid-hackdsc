import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
// Shared
import Heading from "../../components/Unauthenticated/Heading";
// Routes
import Home from "../../routes/Unauthenticated/Home";
import About from "../../routes/Unauthenticated/About";

const { Header, Content, Footer } = Layout;

const Unauthenticated = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Heading />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default Unauthenticated;
