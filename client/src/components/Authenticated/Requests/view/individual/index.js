import React, { Component } from "react";

// evergreen ui components
import { Pane } from "evergreen-ui";

import {db} from "../../../Firebase";
import RequestDet from "./RequestDet";


class RequestDetails extends Component {

  constructor(props) {
    super(props);

    this.ref = db.collection("Requests");
    this.unsubscribe = null;
    this.state = {
      requestList: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const requestList = [];
    querySnapshot.forEach(doc => {
      const { username, message } = doc.data();
      requestList.push({
        key: doc.id,
        username,
        message,
    
      });
    });
    this.setState({
      requestList
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { requestList } = this.state;

    let ShowInfo;

      ShowInfo = <RequestDet requestItem={requestItem} />;

    return (
      <Pane background="blueTint" padding={24} maxWidth={800} margin={"auto"}>
        {ShowInfo}
      </Pane>
    );
  }

}

export default RequestDetails;