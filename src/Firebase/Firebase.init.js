
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBh2uYdzYGkKHTtDzT3EELUIBJj-KM77hI",
  authDomain: "onceptual-2.firebaseapp.com",
  projectId: "onceptual-2",
  storageBucket: "onceptual-2.firebasestorage.app",
  messagingSenderId: "687618808931",
  appId: "1:687618808931:web:f1b473b02fb297d7e7ac56"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);