import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './AddressFirebase.css'

const firebaseConfig = {
  apiKey: "AIzaSyCue-AJchhCW6Mkd4FFnEcPd8xkyGMwK5I",
  authDomain: "react-apps-email-password.firebaseapp.com",
  projectId: "react-apps-email-password",
  storageBucket: "react-apps-email-password.appspot.com",
  messagingSenderId: "682529823160",
  appId: "1:682529823160:web:3e1474cc77836b9720974d",
  measurementId: "G-D75JS5N41G"
};

function AddressFirebase({ onAddressAdded }) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('');

  useEffect(() => {
    // Check if Firebase app is initialized
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get Firestore object
    const db = firebase.firestore();

    // Write data to Firebase
    db.collection('addresses')
      .add({
        address,
        city,
        state,
        zipCode,
        phone,
        country,
      })
      .then((docRef) => {
        const savedData = {
          id: docRef.id,
          address,
          city,
          state,
          zipCode,
          phone,
          country,
        };
      
        // Pass the new address data to the parent component
        onAddressAdded(savedData);
      
        // Display the saved data on the browser screen
        const displayData = JSON.stringify(savedData, null, 2);
        const displayElement = document.createElement('pre');
        displayElement.textContent = displayData;
        document.body.appendChild(displayElement);
      
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Data saved successfully';
        document.body.appendChild(successMessage);
      })
      .catch((error) => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Error saving data: ' + error.message;
        document.body.appendChild(errorMessage);
      });

    // Clear input fields
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    setPhone('');
    setCountry('');
  };

  return (
    <div className='address-firebase'>
      <h1>Add New Address</h1>
      <form onSubmit={handleSubmit} className='address-firebase-form'>
        <p>Address*</p>
        <input className='address-firebase-input'
          type="text"
          placeholder="Type your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <p><span className='address-firebase-p'>City</span> <span>State</span></p>
        <input className='address-firebase-input-1'
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className='address-firebase-input-1'
          type="text"
          placeholder="Enter your state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <br />
        <p><span className='address-firebase-p'>ZIP code</span> <span>Phone no</span></p>
        <input className='address-firebase-input-1'
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <input className='address-firebase-input-1'
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <p>Country</p>
        <input className='address-firebase-input'
          type="text"
          id="davlat"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <button className='address-firebase-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressFirebase;