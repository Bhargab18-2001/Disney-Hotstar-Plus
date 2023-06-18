
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC5pWcu11faRVSZ_n0duuXF4Md-HoADdrE",
  authDomain: "disney-hotstar-plus.firebaseapp.com",
  projectId: "disney-hotstar-plus",
  storageBucket: "disney-hotstar-plus.appspot.com",
  messagingSenderId: "643543085820",
  appId: "1:643543085820:web:82a5fe462a106e1cb31d79"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
