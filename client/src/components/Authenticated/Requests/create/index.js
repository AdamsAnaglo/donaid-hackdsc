import React, {Component} from "react";

import {db} from "../../../Firebase";
import * as firebase from 'firebase';

// import ui components
import {
    Pane,
    Button,
    Label,
    TextInput,
    Textarea,
    TagInput,
    toaster
} from "evergreen-ui";

class CreateRequest extends Component {
    constructor() {
        super();

        this.ref = db.collection("Requests");
        this.state = {
            username: "",
            message: "",
            date:" "
        };
    }
    

    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    submitForm = (e) => {
        

        const {username, message,date=firebase.firestore.Timestamp.now()} = this.state;

        if (username === '' || message === '') {
            toaster.danger("Error!", {
                description: 'Username & Message field can not be empty'
            });
            return;
        }

        

        this.ref.add({
            username,
            message,
            date
        }).then(addedDoc => {
            
            console.log('Request submitted successfully', addedDoc);
            this.setState({
                username: "",
                message: "",
                date:""
            });
        }).catch(error => {
            console.log('Error submitting request', error);
        });
    }

    render() {
        const {username,message,date} = this.state;
        

        return (
            <Pane background="white" padding={24} maxWidth={800} margin={"auto"}>
                <Label htmlFor="username" display="block">
                    Username
                </Label>
                <TextInput
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChange}
                    marginBottom={10}
                />

                <Label htmlFor="message" marginBottom={4} display="block">
                    Message
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    marginBottom={10}
                    onChange={this.onChange}
                    value={message}
                />


                <Button
                    display="block"
                    onClick={this.submitForm}
                >
                    Request for Aid
                </Button>
            </Pane>
        );
    }
}

export default CreateRequest;