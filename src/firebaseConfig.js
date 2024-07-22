import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCf9a76w4AFI7fK3lNAAYiIH_8Hp1wiSEs",
    authDomain: "shipmentdeliveryapp.firebaseapp.com",
    projectId: "shipmentdeliveryapp",
    storageBucket: "shipmentdeliveryapp.appspot.com",
    messagingSenderId: "115613728929",
    appId: "1:115613728929:web:a8cb749ff35e313284f0e0",
    measurementId: "G-MQV8YBWPR2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };