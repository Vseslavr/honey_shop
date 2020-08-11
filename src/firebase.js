import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAeG_Vb4Il4poUJz5QB-gmpJzxuAGSs9_w",
  authDomain: "honey-shop-d679c.firebaseapp.com",
  databaseURL: "https://honey-shop-d679c.firebaseio.com",
  projectId: "honey-shop-d679c",
  storageBucket: "honey-shop-d679c.appspot.com",
  messagingSenderId: "957607304661",
  appId: "1:957607304661:web:4ee53a05bfd9bb8f29b15c",
});

const db = firebase.firestore();

export { db };
