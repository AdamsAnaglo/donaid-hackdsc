import React from 'react';
import firestore from "./components/firestore";

class Receivers extends React.Component {
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
  render() {
    return (
        <form>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={this.updateInput}
            value={this.state.firstname}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={this.updateInput}
            value={this.state.lastname}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={this.updateInput}
            value={this.state.phone}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            onChange={this.updateInput}
            value={this.state.dob}
          />
          <button onSubmit={this.addReceivers} type="submit">Submit</button>
        </form>
        );
      }
      
   }
export default Receivers;