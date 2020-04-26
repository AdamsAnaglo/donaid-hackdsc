import React, {Component} from "react";

import {db} from "../../../../Firebase";

import {Pane} from "evergreen-ui";

import RequestDetItem from "./RequestDetItem";

class RequestDet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: "",
            request: {}
        };
    }

    componentDidMount() {
        const ref = db.collection("Requests").doc(this.props.match.params.id);
        ref.get().then(doc => {
            if (doc.exists) {
                this.setState({
                    request: doc.data(),
                    key: doc.id
                });
            } else {
                console.log("No requests found!");
            }
        });
    }

    render() {
        const {key, request} = this.state;

        let renderRequest;
       
            renderRequest = <RequestDetItem id={key} request={request}/>;
        

        return (
            <Pane background="blueTint" padding={24} maxWidth={800} margin={"auto"}>
                {renderRequest}
            </Pane>
        );
    }
}

export default RequestDet;