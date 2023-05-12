import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4E3qkP9WGxQznYxWB6f52G_1PPnaQ95U",
  authDomain: "securityforhandsin.firebaseapp.com",
  projectId: "securityforhandsin",
  storageBucket: "securityforhandsin.appspot.com",
  messagingSenderId: "200245150083",
  appId: "1:200245150083:web:d27082352a5efa5f4f76b6",
  databaseURL:"https://securityforhandsin-default-rtdb.asia-southeast1.firebasedatabase.app/"
  // Your Firebase configuration here
};
export const firebaseapp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseapp);
