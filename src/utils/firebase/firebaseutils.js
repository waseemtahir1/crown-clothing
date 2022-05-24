// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtVM7P2Bk1PuI6e0nvmwJ-hWsLieX4IVs",
  authDomain: "crown-clothing-db-20375.firebaseapp.com",
  projectId: "crown-clothing-db-20375",
  storageBucket: "crown-clothing-db-20375.appspot.com",
  messagingSenderId: "728251203250",
  appId: "1:728251203250:web:f82b8eaef9c4464e6bd3ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google as Auth Provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentfromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  //console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  //console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const createAutUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const userSignInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedLister = (callback) =>
  onAuthStateChanged(auth, callback);
