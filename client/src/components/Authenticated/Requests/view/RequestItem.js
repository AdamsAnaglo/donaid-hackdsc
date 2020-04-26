import React, {Component} from "react";
import {db} from '../../../Firebase';

import {Link} from 'react-router-dom';

// evergreen ui components
import {Table,Button} from "evergreen-ui";

class RequestItem extends Component {



    render() {
        const {request} = this.props;

        return (
            <Table.Row key={request.key}>
                <Table.TextCell>{request.username}</Table.TextCell>
                <Table.TextCell>{request.message}</Table.TextCell>
                <Table.TextCell>
                    <Link to={`/request/${request.key}`}>
                    <Button height={30} marginRight={16}>
                            Donate
                    </Button>
                    </Link>
                </Table.TextCell>
            </Table.Row>
        );
    }
}

export default RequestItem;