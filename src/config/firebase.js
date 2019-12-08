import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAxcH8AkeccwDq2n2iy2cah8VZ1qe76NmA',
  authDomain: 'thepitchapp-bf937.firebaseapp.com',
  databaseURL: 'https://thepitchapp-bf937.firebaseio.com',
  projectId: 'thepitchapp-bf937',
  storageBucket: 'thepitchapp-bf937.appspot.com',
  messagingSenderId: '709250480445',
  appId: '1:709250480445:web:7b9c726ceee54975f7ed54',
  measurementId: 'G-EKWMYYX6ZP',
};
// Initialize Firebase
firebase.initializeApp (firebaseConfig);

export default firebase;
