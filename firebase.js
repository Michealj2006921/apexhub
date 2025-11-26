import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXXHoq07rEVgv94J52ksI9vKAfj4az4Rg",
  authDomain: "apexhub-b3561.firebaseapp.com",
  projectId: "apexhub-b3561",
  storageBucket: "apexhub-b3561.firebasestorage.app",
  messagingSenderId: "150503919794",
  appId: "1:150503919794:web:1e38fe47c32cfad847b9ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
