import React, { Component } from "react";

import { Table } from "evergreen-ui";
import RequestItem from './RequestItem';

class RequestTable extends Component {
  render() {
    const requestList = this.props.requestList;

    return (
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Username</Table.TextHeaderCell>
          <Table.TextHeaderCell>Message</Table.TextHeaderCell>
          <Table.TextHeaderCell>Action</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={250}>
          {requestList.map(request => (
            <RequestItem key={request.key} request={request}/>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default RequestTable;