import React from 'react';
import firestore from "./components/firestore";

class Donors extends React.Component {
    constructor() {
        super();
        this.dbRef = firebase.firestore().collection('Donors');
        this.state = {
          username: " ",
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
export default Donors;