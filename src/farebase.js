
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCNpxGeZtQF1HkJw49YTQC3i2qIFGfpWpM",
  authDomain: "jobs-cbfc1.firebaseapp.com",
  projectId: "jobs-cbfc1",
  storageBucket: "jobs-cbfc1.appspot.com",
  messagingSenderId: "869956838107",
  appId: "1:869956838107:web:d07e65d6a8d38c41f922fe",
  measurementId: "G-69WVCD9RS6"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);