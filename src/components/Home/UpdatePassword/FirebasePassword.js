// import React, { useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
import './FirebasePassword.css'

// const firebaseConfig = {
//     apiKey: "AIzaSyCue-AJchhCW6Mkd4FFnEcPd8xkyGMwK5I",
//     authDomain: "react-apps-email-password.firebaseapp.com",
//     projectId: "react-apps-email-password",
//     storageBucket: "react-apps-email-password.appspot.com",
//     messagingSenderId: "682529823160",
//     appId: "1:682529823160:web:3e1474cc77836b9720974d",
//     measurementId: "G-D75JS5N41G"
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

// const firestore = firebase.firestore();
// const storage = firebase.storage();

// function FirebasePassword() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [img, setImg] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       const userRef = await firestore.collection('users').add({
//         username,
//         email
//       });

//       if (img) {
//         const imgRef = storage.ref().child(`users/${userRef.id}/profile.jpg`);
//         await imgRef.put(img);
//       }

//       alert('Ma\'lumotlar saqlandi!');

//       setUsername('');
//       setEmail('');
//       setImg(null);
//     } catch (error) {
//       console.error('Xatolik yuz berdi: ', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className='firebase-password'>
//       <h2 className='firebase-password-h1'>Update password</h2>
//       <form onSubmit={handleSubmit} className='firebase-password-form'>
//         <p>Current Password</p>
//         <input
//           className='firebase-password-input'
//           type="text"
//           placeholder="Type your password"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <p>New Password</p>
//         <input
//           className='firebase-password-input'
//           type="email"
//           placeholder="Type your password"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button className='firebase-password-button' type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Saqlanmoqda...' : 'Update'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FirebasePassword;


import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

function FirebasePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);

      alert('Parol yangilandi!');

      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      alert('Sizning parolingiz yangilanmadi: Qayta o`rinib ko`ring: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="firebase-password">
      <h2 className="firebase-password-h1">Update Password</h2>
      <form onSubmit={handleSubmit} className="firebase-password-form">
        <p>Current Password</p>
        <input
          className="firebase-password-input"
          type="password"
          placeholder="Type your password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <p>New Parol</p>
        <input
          className="firebase-password-input"
          type="password"
          placeholder="Type your password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="firebase-password-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saqlanmoqda...' : 'Yangilash'}
        </button>
      </form>
    </div>
  );
}

export default FirebasePassword;