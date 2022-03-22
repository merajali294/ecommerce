import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = { apiKey: "AIzaSyAdFZDWrU2H16PgVIvQZf7_yakOafgFz40", authDomain: "ecommerce-9150d.firebaseapp.com", projectId: "ecommerce-9150d", storageBucket: "ecommerce-9150d.appspot.com", messagingSenderId: "402715331363", appId: "1:402715331363:web:df533e12db9e861fbf1a96" };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase

