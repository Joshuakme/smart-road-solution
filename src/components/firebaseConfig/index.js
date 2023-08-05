
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

    const firebaseConfig = {
        apiKey: "AIzaSyB0fLJeHL5CFwQVWpmLDdOmu1zXXLeG9s4",
        authDomain: "suibian-a06f8.firebaseapp.com",
        databaseURL: "https://suibian-a06f8-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "suibian-a06f8",
        storageBucket: "suibian-a06f8.appspot.com",
        messagingSenderId: "662312195783",
        appId: "1:662312195783:web:b89cd569ede7ff915b90e2",
        measurementId: "G-EG1L81M3C7"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

export default database;