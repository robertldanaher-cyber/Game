// ============================================================
//  SPIN TO SIP — Firebase Configuration
//  Replace the values below with your Firebase project config.
//  Found in: Firebase Console > Project Settings > Your Apps
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyAkCnNi-yP2-rz1VtzE-7yvHynZLZYy5KE",
  authDomain: "wheel-of-misfortune-19ef4.firebaseapp.com",
  databaseURL: "https://wheel-of-misfortune-19ef4-default-rtdb.firebaseio.com",
  projectId: "wheel-of-misfortune-19ef4",
  storageBucket: "wheel-of-misfortune-19ef4.firebasestorage.app",
  messagingSenderId: "367444826595",
  appId: "1:367444826595:web:cd8aac7acc88bb706628d6"
};

// ============================================================
//  FIREBASE REALTIME DATABASE RULES (paste into Firebase Console)
//  Rules > Realtime Database > Rules tab
// ============================================================
/*
{
  "rules": {
    "games": {
      "$gameId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
*/
