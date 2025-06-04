import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDq_AP_8FarPu1fuXrmbt9FLG9M5A_wOnQ",
  authDomain: "amtech-admin.firebaseapp.com",
  projectId: "amtech-admin",
  storageBucket: "amtech-admin.firebasestorage.app",
  messagingSenderId: "150827625116",
  appId: "1:150827625116:web:872eb5b63f3bb5bd79db59",
  measurementId: "G-FNMFL4L24Y"
};



const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}