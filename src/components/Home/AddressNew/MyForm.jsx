import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const MyForm = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCue-AJchhCW6Mkd4FFnEcPd8xkyGMwK5I",
      authDomain: "react-apps-email-password.firebaseapp.com",
      projectId: "react-apps-email-password",
      storageBucket: "react-apps-email-password.appspot.com",
      messagingSenderId: "682529823160",
      appId: "1:682529823160:web:3e1474cc77836b9720974d",
      measurementId: "G-D75JS5N41G"
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    db.collection('addresses')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAddresses(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Kiritilgan Malumatlar shu yerga saqlanadi</h1>
      <p>Malumatlar yangilash (yani obnavit) berilganda chiqadi</p>
      {addresses.map((address) => (
        <div key={address.id}>
          <p>Address: {address.address}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip Code: {address.zipCode}</p>
          <p>Phone: {address.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default MyForm;