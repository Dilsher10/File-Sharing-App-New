import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpEO5etV5AD69IBM6othaRdePTpVC5vGs",
  authDomain: "file-sharing-app-37c96.firebaseapp.com",
  projectId: "file-sharing-app-37c96",
  storageBucket: "file-sharing-app-37c96.firebasestorage.app",
  messagingSenderId: "967508058876",
  appId: "1:967508058876:web:91f5bcc6845290ad932d79"
};

const app = initializeApp(firebaseConfig);

export { app };