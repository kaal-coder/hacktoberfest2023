// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  import { initializeApp } from 'firebase/app';

 import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
 import { getStorage } from "firebase/storage";
// import "firebase/compat/firestore";
 import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

  const firebaseApp=initializeApp({
    apiKey: "AIzaSyB995T4eWAo17e-_LQDW23mEGNLF2feSZc",
    authDomain: "instagram-clone-2a043.firebaseapp.com",
    projectId: "instagram-clone-2a043",
    storageBucket: "instagram-clone-2a043.appspot.com",
    messagingSenderId: "1048717225669",
    appId: "1:1048717225669:web:085d22f850e2aae9790aac",
    measurementId: "G-PJCEW9T5J5"
  });
  const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    const storage = getStorage(firebaseApp);

export {
    db,auth,storage
};
//  
// const db = firebaseApp.firestore();
//    const auth = firebase.auth();
//    const storage = firebase.storage();