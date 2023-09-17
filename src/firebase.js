// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAJRzrbGpHxHFMo8qX5dKB3Lvu9gx79O-w",
//   authDomain: "ecomm-auth-367f2.firebaseapp.com",
//   projectId: "ecomm-auth-367f2",
//   storageBucket: "ecomm-auth-367f2.appspot.com",
//   messagingSenderId: "1020236207073",
//   appId: "1:1020236207073:web:a0dc0736cfd392150438a0",
//   measurementId: "G-6REBKCNHST"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// export {app, auth}




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA50PqE056pAtRE8ytYidG65EijxvfN2tQ",
  authDomain: "fir-auth-tally-count.firebaseapp.com",
  projectId: "fir-auth-tally-count",
  storageBucket: "fir-auth-tally-count.appspot.com",
  messagingSenderId: "604262238550",
  appId: "1:604262238550:web:657edc89a31915ebb56ef7",
  measurementId: "G-1QP9FVRC49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export {app, auth}