import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzCqG0ZWzkyatp88kP6Q_rMwBFq4NBZeI",
  authDomain: "amtach-data.firebaseapp.com",
  projectId: "amtach-data",
  storageBucket: "amtach-data.firebasestorage.app",
  messagingSenderId: "285756843901",
  appId: "1:285756843901:web:fe26de984777eaf3d1ce14",
  measurementId: "G-TJF0BMT8XC"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}
