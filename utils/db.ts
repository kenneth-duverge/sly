// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB0B5cteYym5b5Asbvdm5KPiIKz5yzwsiM',
  authDomain: 'njdmv-next-dev.firebaseapp.com',
  projectId: 'njdmv-next-dev',
  storageBucket: 'njdmv-next-dev.appspot.com',
  messagingSenderId: '234469885474',
  appId: '1:234469885474:web:c6cc6f8909dbe8dab3ac7b',
  measurementId: 'G-8171228PEJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
