import React, { useState } from 'react'; 

import { db } from '../firebase'; // add

const ReceiverForm = () => {
 

  const [receiver, setReceiver] = useState({
    username: " ",
    first_name:"",
    last_name:"",
    dob: " ",
    phone: " ",
  });

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('Receivers').add(receiver); // update
    setReceiver({
        username: " ",
        first_name:"",
        last_name:"",
        dob: " ",
        phone: " ",
        bank_auth:false,
    });
  };

  const handleChange = e => {
    setReceiver({ ...receiver, [e.target.name]: e.target.value });
  };

  return (
    // ...
  );
};

export default ReceiverForm;