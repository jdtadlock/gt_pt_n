import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA5cU6j0yMlRJ52Pf4nqZ-kMqgMDHNe9-E",
  authDomain: "class-example-429b4.firebaseapp.com",
  databaseURL: "https://class-example-429b4.firebaseio.com",
  projectId: "class-example-429b4",
  storageBucket: "class-example-429b4.appspot.com",
  messagingSenderId: "212806655918"
};
firebase.initializeApp(config);
export default firebase;