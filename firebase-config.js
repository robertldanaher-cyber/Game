// ============================================================
//  SPIN TO SIP — Firebase Configuration
//  Replace the values below with your Firebase project config.
//  Found in: Firebase Console > Project Settings > Your Apps
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
