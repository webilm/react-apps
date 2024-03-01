// import React, { useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyD6A-1BXO8xP1cbcxpsYmnaPCNQrcC69HA",
//   authDomain: "add-phone-zip.firebaseapp.com",
//   projectId: "add-phone-zip",
//   storageBucket: "add-phone-zip.appspot.com",
//   messagingSenderId: "557401015844",
//   appId: "1:557401015844:web:e4d38909d4251c7a32fab1",
//   measurementId: "G-NS8RZH5WFF"
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const storage = firebase.storage();

// function FirebaseAccount() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [img, setImg] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const userRef = await firestore.collection('users').add({
//         username,
//         email
//       });

//       if (img) {
//         const imgRef = storage.ref().child(`users/${userRef.id}/profile.jpg`);
//         await imgRef.put(img);
//       }

//       alert('Ma\'lumotlar saqlandi!');
//     } catch (error) {
//       console.error('Xatolik yuz berdi: ', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Profilni Yangilash</h2>
//       <form onSubmit={handleSubmit}>
//         <p>To'liq Ism</p>
//         <input
//           type="text"
//           placeholder="Ismingizni kiriting"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <p>Email</p>
//         <input
//           type="email"
//           placeholder="Emailingizni kiriting"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <p>Avatar</p>
//         <div>
//           {img && (
//             <img
//               src={URL.createObjectURL(img)}
//               alt="Avatar"
//               width={56}
//               height={56}
//             />
//           )}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImg(e.target.files[0])}
//           />
//         </div>
//         <button type="submit">Saqlash</button>
//       </form>
//     </div>
//   );
// }

// export default FirebaseAccount;

import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import './FirebaseAccount.css'

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

const firestore = firebase.firestore();
const storage = firebase.storage();

function FirebaseAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const userRef = await firestore.collection('users').add({
        username,
        email
      });

      if (img) {
        const imgRef = storage.ref().child(`users/${userRef.id}/profile.jpg`);
        await imgRef.put(img);
      }

      alert('Ma\'lumotlar saqlandi!');

      setUsername('');
      setEmail('');
      setImg(null);
    } catch (error) {
      console.error('Xatolik yuz berdi: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='firebase-account'>
      <h2 className='firebase-account-h1'>Update profile</h2>
      <form onSubmit={handleSubmit} className='firebase-account-form'>
        <p>Full Name</p>
        <input
          className='firebase-account-input'
          type="text"
          placeholder="Type your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Email</p>
        <input
          className='firebase-account-input'
          type="email"
          placeholder="Type your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Avatar</p>
        <div className='firebase-account-img'>
            {img && (
                <img
                    className='firebase-account-img-img'
                    src={URL.createObjectURL(img)}
                    alt="Avatar"
                    width={56}
                    height={56}
                />
            )}
            <input 
                className='firebase-account-input-img'
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
            />
        </div>
        <button className='firebase-account-button' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saqlanmoqda...' : 'Update'}
        </button>
      </form>
    </div>
  );
}

export default FirebaseAccount;