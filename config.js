import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBOIJSu9YLJaxY8iTLr0KLMEspzw2rHvEA",
  authDomain: "ai-covid-assistant.firebaseapp.com",
  databaseURL: "https://ai-covid-assistant-default-rtdb.firebaseio.com",
  projectId: "ai-covid-assistant",
  storageBucket: "ai-covid-assistant.appspot.com",
  messagingSenderId: "989831202370",
  appId: "1:989831202370:web:f6aa962b83d5ec24f18fdb"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
