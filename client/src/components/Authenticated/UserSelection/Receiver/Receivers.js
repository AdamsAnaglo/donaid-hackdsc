import React from 'react';
import firestore from "./components/firestore";

class Receivers extends React.Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Receivers');
    this.state = {
      username: " ",
      first_name:"",
      last_name:"",
      dob: " ",
      phone: " ",
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeDonor() {
    if(this.state.username === ''){
     alert('Enter a valid username')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        username: this.state.username,
        phone: this.state.phone,
        dob: this.state.dob,
      }).then((res) => {
        this.setState({
          username: '',
          phone: '',
          dob: '',
          isLoading: false,
        });
        this.props.navigation.navigate('Donors')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
}

render() {
return (
    <form>
      <input
        type="string"
        name="username"
        placeholder="Username"
        onChange={this.updateInput}
        value={this.state.username}
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
      <button onSubmit={this.addDonors} type="submit">Submit</button>
    </form>
    );
  }
  
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