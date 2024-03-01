import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCue-AJchhCW6Mkd4FFnEcPd8xkyGMwK5I",
    authDomain: "react-apps-email-password.firebaseapp.com",
    projectId: "react-apps-email-password",
    storageBucket: "react-apps-email-password.appspot.com",
    messagingSenderId: "682529823160",
    appId: "1:682529823160:web:3e1474cc77836b9720974d",
    measurementId: "G-D75JS5N41G"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

// Firestore'dan ma'lumotlarni olish funksiyoni
const getAddresses = async () => {
  try {
    const snapshot = await firestore.collection('addresses').get();
    const addresses = snapshot.docs.map(doc => doc.data());
    return addresses;
  } catch (error) {
    console.error('Xatolik yuz berdi: ', error);
    return [];
  }
};

// Ma'lumotlarni olish va chiqarish
getAddresses().then(addresses => {
  addresses.forEach(address => {
    console.log(address);
  });
});