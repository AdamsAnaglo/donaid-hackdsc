import React, { useState } from "react";
import { Card, Tooltip, Pagination } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const dummyData = [
  {
    first_name: "William",
    last_name: "Leiby",
    description: "Hello there",
  },
];

const Donations = () => {
  const [state, setState] = useState({
    receiversList: [
      {
        first_name: "William",
        last_name: "Leiby",
        description: "Hello there",
      },
    ],
    // exampleItems: dummyData,
  });

  // const cardsVisible = 1;

  const giverFirstname = "William";
  const giverLastname = "Leiby";
  const giverDescription = "Hello I am William and this is a description.";

  const declineReceiver = () => {
    console.log("Declined receiver...");
  };

  const { receiversList } = state;

  // const onChangePage = (pageOfItems) => {
  //   setState({ receiversList: [...dummyData] });
  // };

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
        {receiversList.map((receiver) => (
          <div>
            <Card
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[
                <Tooltip title="Send User Money" placement="bottom">
                  <Link to="/checkout">
                    <CheckCircleOutlined
                      key="setting"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </Link>
                </Tooltip>,
                <Tooltip title="Next User" placement="bottom">
                  <Link onClick={declineReceiver}>
                    <CloseCircleOutlined
                      key="edit"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </Link>
                </Tooltip>,
              ]}
            >
              <Card.Meta
                title={`${receiver.first_name} ${receiver.last_name}`}
                description={receiver.description}
              />
            </Card>
            {/* <Pagination
              hideOnSinglePage="true"
              defaultPageSize="1"
              pageSize="1"
              // onChange={onChangePage}
            ></Pagination> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
