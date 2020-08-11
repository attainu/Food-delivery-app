import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCl8z2-YywDYxuRCe4qpOOP4q5b3xBvqOo",
  authDomain: "food-app-adf00.firebaseapp.com",
  databaseURL: "https://food-app-adf00.firebaseio.com",
  projectId: "food-app-adf00",
  storageBucket: "food-app-adf00.appspot.com",
  messagingSenderId: "642032818567",
  appId: "1:642032818567:web:455786866d2135bb48db22",
  measurementId: "G-G3HEKK4JXK"
};

const fire = firebase.initializeApp(config);

export default fire;