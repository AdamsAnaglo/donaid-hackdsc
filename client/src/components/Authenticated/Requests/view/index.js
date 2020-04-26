import React, { Component } from "react";

// evergreen ui components
import { Pane } from "evergreen-ui";

import {db} from "../../../Firebase";
import RequestTable from "./RequestsTable";


class ViewRequest extends Component {

  constructor(props) {
    super(props);

    this.ref = db.collection("Requests");
    this.unsubscribe = null;
    this.state = {
      loading: true,
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

    let ShowTable;

      ShowTable = <RequestTable requestList={requestList} />;

    return (
      <Pane background="blueTint" padding={24} maxWidth={800} margin={"auto"}>
        {ShowTable}
      </Pane>
    );
  }

}

export default ViewRequest;