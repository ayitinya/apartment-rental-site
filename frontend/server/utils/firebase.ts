import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getDatabase } from 'firebase-admin/database';
import { getFirestore } from 'firebase-admin/firestore';


export const firebaseConfig = initializeApp({
    credential: cert('./service-account.json'),
    databaseURL: 'https://rent-a-home-here-default-rtdb.firebaseio.com/',
    storageBucket: 'rent-a-home-here.appspot.com'
})

export const storage = getStorage(firebaseConfig);
export const database = getDatabase(firebaseConfig);
export const firestore = getFirestore(firebaseConfig);