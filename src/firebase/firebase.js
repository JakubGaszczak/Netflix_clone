import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDM9mPVa5z_par7c-uI2l9mwnf9iampYbg",
    authDomain: "netflix-clone-f6cfe.firebaseapp.com",
    projectId: "netflix-clone-f6cfe",
    storageBucket: "netflix-clone-f6cfe.appspot.com",
    messagingSenderId: "416042886776",
    appId: "1:416042886776:web:71ea6b1b57006bdebf2f8d"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)