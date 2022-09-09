import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function signupUser(email, username, password) {
  const data = await createUserWithEmailAndPassword(auth, email, password);

  const usersRef = doc(db, "users", data.user.uid);
  const addedData = await setDoc(usersRef, {
    email: email,
    username: username,
    avatar: null,
    description: null
  })

  return {
  email: email,
  username: username,
  avatar: null,
  description: null,
  uid: data.user.uid
  };
}