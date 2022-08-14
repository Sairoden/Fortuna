// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeHMliVRmbh9Uo_MpylVYPmxHWvkIcAZw",
  authDomain: "fortuna-767ca.firebaseapp.com",
  projectId: "fortuna-767ca",
  storageBucket: "fortuna-767ca.appspot.com",
  messagingSenderId: "838269487566",
  appId: "1:838269487566:web:ae625e00c1b05af9b3839f",
  measurementId: "G-26FENB2RVH",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
  } catch (err) {
    console.error(err.message);
  }
};

export const getCategoriesAndDocuments = async () => {
  try {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  } catch (err) {
    console.error(err.message);
  }
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error("Error creating user with email and password");
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error("Error signing in user with email and password");
  }
};

export const signOutUser = async () => {
  try {
    return await signOut(auth);
  } catch (err) {
    console.error("Error signing out", err.message);
  }
};

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
