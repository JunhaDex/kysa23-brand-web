import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA157G8iO98DKGGJJyP4DGswvI_2HtrIBU',
  authDomain: 'kysa23-project.firebaseapp.com',
  databaseURL: 'https://kysa23-project-default-rtdb.firebaseio.com',
  projectId: 'kysa23-project',
  storageBucket: 'kysa23-project.appspot.com',
  messagingSenderId: '869476849181',
  appId: '1:869476849181:web:c24ee250b3adbf6c6bd8f4',
  measurementId: 'G-NMXZDCHKDD'
}

// Get Firebase Instances

export function getApp() {
  return initializeApp(firebaseConfig)
}

export function getDB() {
  const app = getApp()
  return getDatabase(app)
}
