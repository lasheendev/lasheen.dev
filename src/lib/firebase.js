import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXG5hfEfLnSlS4xB02Hc4sq4QoJLdtF3k",
    authDomain: "yousseflasheen-portfolio.firebaseapp.com",
    databaseURL: "https://yousseflasheen-portfolio.firebaseio.com",
    projectId: "yousseflasheen-portfolio",
    storageBucket: "yousseflasheen-portfolio.appspot.com",
    messagingSenderId: "23616548175",
    appId: "1:23616548175:web:1e43be6728d4c7ad0be93a",
    measurementId: "G-XS85EWMZYC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);