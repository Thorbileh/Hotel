// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import 'firebase/storage';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCrApZYjWqrMT9m4T1odtoX327pMaHQb5I",
  authDomain: "hotelbooking-e5fa4.firebaseapp.com",
  projectId: "hotelbooking-e5fa4",
  storageBucket: "hotelbooking-e5fa4.appspot.com",
  messagingSenderId: "651068644861",
  appId: "1:651068644861:web:c6f9f9a1e382b1fcef8d94",
  measurementId: "G-QHT2VL7J22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
/* const analytics = getAnalytics(app); */
// firebase.initializeApp()
const storage = getStorage(app)

export const db = getFirestore()

export { auth, storage };



export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

//to sign in
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
//to sign out the function
export function logout() {
  return signOut(auth)
}

//custoom react hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {

    const unsub = onAuthStateChanged(auth, user => { setCurrentUser(user) });
    return unsub;
  }, [])
  return currentUser;
}

//storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid);
  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);


  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert("you have uploaded a picture")
}