import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCScg5oCZoLbjVElzMCo3kMj8fRTu_KM24",
  authDomain: "invitacion-84f41.firebaseapp.com",
  projectId: "invitacion-84f41",
  storageBucket: "invitacion-84f41.appspot.com",
  messagingSenderId: "862875819922",
  appId: "1:862875819922:web:2653953ac18d6e13aeeb4b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getUsers() {
  const usuariosLogin = collection(db, 'login');
  const usuariosSnapshot = await getDocs(usuariosLogin);
  const result = usuariosSnapshot.docs.map(doc => doc.data());
  console.log(result)
  return result;
}

export async function getUser(usuario: string ) {
  const docRef = doc(db, "usuarios", usuario);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function upDateAsist(idUsuario:string, acepto:Boolean) {
  const docRef = doc(db, "usuarios", idUsuario);
  updateDoc(docRef, 'confirmo', acepto );
}

export async function addUser(nombre: string, apellido: string) {

  try {
    const docRef = doc(db, "usuarios", `${nombre}${apellido}`);
    setDoc(docRef, {
      apellido: nombre,
      confirmo: false,
      esAdmin: false,
      ingreso: false,
      nombre: apellido,
      viajaEnBuss: false
    })
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}