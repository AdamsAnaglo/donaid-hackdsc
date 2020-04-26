import React, {Component} from "react";

import {Link} from "react-router-dom";

import {
    Heading,
    Paragraph,
    Button,
} from "evergreen-ui";

class RequestDetItem extends Component {

    render() {
        const { id, request} = this.props;

        return (
            <div>
                <Heading size={500} marginBottom={10}>
                    {request.username}
                </Heading>

                <Paragraph size={500} marginBottom={10}>
                    {request.message}
                </Paragraph>

                <Paragraph>
                    <Link to={`/donate`}>
                        <Button marginRight={10}>
                            Donate
                        </Button>
                    </Link>
                </Paragraph>
            </div>
        );
    }
}

export default RequestDetItem;