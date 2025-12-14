// Firebase configuration
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getDatabase, Database } from 'firebase/database';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Your web app's Firebase configuration
// Get these values from Firebase Console: Project Settings > General > Your apps
// For Expo, use environment variables with EXPO_PUBLIC_ prefix
const databaseURL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL;

const firebaseConfig: any = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID",
};

// Only add databaseURL if it's provided and valid
if (databaseURL && databaseURL !== "YOUR_DATABASE_URL" && databaseURL.startsWith('https://')) {
  firebaseConfig.databaseURL = databaseURL;
}

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let realtimeDb: Database | null = null;
let storage: FirebaseStorage;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  
  // Initialize Auth with AsyncStorage persistence for React Native
  if (Platform.OS !== 'web') {
    try {
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    } catch (error: any) {
      // If auth is already initialized, get the existing instance
      if (error.code === 'auth/already-initialized') {
        auth = getAuth(app);
      } else {
        throw error;
      }
    }
  } else {
    // For web, use standard getAuth
    auth = getAuth(app);
  }
  
  db = getFirestore(app);
  
  // Only initialize Realtime Database if databaseURL is provided
  if (databaseURL && databaseURL !== "YOUR_DATABASE_URL" && databaseURL.startsWith('https://')) {
    try {
      realtimeDb = getDatabase(app);
    } catch (error) {
      console.warn('Realtime Database not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
  }
  
  storage = getStorage(app);
} else {
  app = getApps()[0];
  
  // Initialize Auth with AsyncStorage persistence for React Native
  if (Platform.OS !== 'web') {
    try {
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });
    } catch (error: any) {
      // If auth is already initialized, get the existing instance
      if (error.code === 'auth/already-initialized') {
        auth = getAuth(app);
      } else {
        throw error;
      }
    }
  } else {
    // For web, use standard getAuth
    auth = getAuth(app);
  }
  
  db = getFirestore(app);
  
  // Only initialize Realtime Database if databaseURL is provided
  if (databaseURL && databaseURL !== "YOUR_DATABASE_URL" && databaseURL.startsWith('https://')) {
    try {
      realtimeDb = getDatabase(app);
    } catch (error) {
      console.warn('Realtime Database not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
  }
  
  storage = getStorage(app);
}

export { app, auth, db, realtimeDb, storage };
export default app;

