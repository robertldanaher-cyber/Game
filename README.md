# 🎡 Wheel of Misfortune

> *Where Every Spin Has Consequences*

A real-time multiplayer Wheel of Fortune-style drinking game. 2–6 players join from their phones, a host runs the game from a laptop or projected screen. Built with vanilla HTML/JS + Firebase Realtime Database, hosted on GitHub Pages — no server required.

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Player view — each player opens this on their phone |
| `host.html` | Host/admin dashboard — run from a laptop or projected TV |
| `firebase-config.js` | Your Firebase credentials — edit before deploying |
| `README.md` | This file |

---

## 🚀 Quick Setup (15 minutes)

### Step 1 — Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**, give it a name (e.g. `wheel-of-misfortune`), click through
3. In the left sidebar go to **Build → Realtime Database**
4. Click **Create Database**, choose any region, select **Start in test mode**, click Enable
5. In the left sidebar go to **Project Settings** (gear icon)
6. Scroll to **Your apps**, click the **Web** icon (`</>`)
7. Give it a nickname, click **Register app**
8. Copy the `firebaseConfig` object shown — you'll need it in Step 2

### Step 2 — Add your Firebase credentials

Open `firebase-config.js` and replace the placeholder values:

```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 3 — Set database rules

1. In Firebase Console go to **Build → Realtime Database → Rules**
2. Replace the existing rules with:

```json
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
```

3. Click **Publish**

### Step 4 — Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `wheel-of-misfortune`)
2. Upload all 4 files to the root of the repo
3. Go to **Settings → Pages → Source**: Deploy from branch → `main` / `root`
4. GitHub will publish your site at:
   ```
   https://YOUR_USERNAME.github.io/wheel-of-misfortune/
   ```

---

## 🎮 How to Run a Game

### Host setup
1. Open `host.html` on your laptop or a projected screen
2. Fill in the setup form: max players, rounds, turn timer, ante amount
3. Optionally check **Free Play mode** for an untimed casual session
4. Click **Create Game** — a 4-letter code and QR code appear
5. Share the code or let players scan the QR

### Players join
1. Each player opens `index.html` on their phone
2. Enter their name, the 4-letter code, pick an emoji avatar and color
3. Tap **Join Game**

### Starting the game
1. Wait for all players to join (host sees them appear in real time)
2. Optionally click **📊 Start Category Vote** to let players vote on the first category
3. Type your first puzzle + category in the left panel
4. Select round type: Standard, Toss-Up, Speed-Up, or Bonus Round
5. Click **Launch Game**

---

## 🎡 Game Rules

### Standard Round
- Active player's phone shows **SPIN / BUY VOWEL / SOLVE**
- **Spin** → land on a point value → guess a consonant
  - Correct: earn `points × letter count`, keep your turn
  - Wrong / already called / vowel guessed: take a sip, turn ends
- **Buy Vowel** → costs 50 pts, reveals all instances of that vowel
- **Solve** → type the full puzzle answer, host judges correct/wrong
  - Correct: round points bank to your total, everyone else sips
  - Wrong: take a sip, turn ends
- Turn passes automatically when the turn timer hits zero

### Wheel Wedges
| Wedge | Effect |
|-------|--------|
| 150–500 pts | Earn pts × consonant count if correct |
| Bankrupt 💀 | Lose all round pts + chug + $1 to jackpot |
| Lose a Turn ⏭️ | Sip + turn ends, keep round pts |
| Sip 🍺 | Take a sip, then guess a consonant at 250 pts base |
| Chug 🍻 | Chug + $1 to jackpot + turn ends |
| Take a Shot 🥃 | Shot + $1 to jackpot + turn ends |
| Wildcard 🃏 | Earn a wildcard token — use any turn for a free consonant |

### Special Rounds
| Round | How it works |
|-------|-------------|
| ⚡ Toss-Up | Host reveals letters one by one. First to buzz in and solve wins. |
| 🚀 Speed-Up | One spin sets base value. Each player gets ONE consonant guess + 3 seconds to solve. |
| 🌟 Bonus Round | R S T L N E pre-revealed. Player picks 3 consonants + 1 vowel. 10 seconds to solve. |

### Scoring & Jackpot
- Every player antes $5 on join (configurable)
- Certain wedges add $1 to the jackpot automatically
- Host can add manual penalties via jackpot panel
- Highest total score at end of all rounds wins the jackpot

---

## 🏠 Host Dashboard Features

| Feature | Where |
|---------|-------|
| Live tile preview as you type a puzzle | Left panel |
| 📚 Puzzle Bank (33 pre-loaded puzzles) | Left panel → click to expand |
| 📊 Category Vote (players vote on next category) | Left panel → Start Category Vote |
| Reveal All button (lights up full board) | Left panel → Round Controls |
| Override any player's score | Left panel → player list |
| Send drink signals to all or one player | Right panel |
| Award wildcards | Right panel |
| Jackpot manual controls | Right panel |
| QR code for easy player join | Left panel → Share |
| Rejoin after accidental refresh | Left panel → 🔄 Rejoin Existing Game |

---

## 📱 Player Phone Features

| Feature | Details |
|---------|---------|
| Avatar + color | Chosen at join, shown in lobby and scoreboard |
| Used letters A–Z | Always visible, green = hit, red = miss |
| Mini spin wheel | Animates on your phone during host's spin |
| Drink alerts | Full-screen overlay when you need to drink |
| Drink history log | Collapsible panel tracking your sips/chugs/shots |
| Sound toggle 🔊/🔇 | Top-right corner, persists across reloads |
| Auto-reconnect | Phone sleep or reload re-joins automatically |
| Game recap | Winner screen shows personal stats + shareable summary |

---

## 🔧 Troubleshooting

**Players can't join**
- Check that Firebase credentials in `firebase-config.js` are correct
- Confirm Realtime Database is enabled and rules are published
- Make sure players are opening `index.html`, not `host.html`

**Game code not found**
- Host must click Create Game first before players join
- Game codes are case-insensitive but must be exactly 4 letters

**Sounds not working**
- Browser requires a user interaction before playing audio
- Players should tap the screen once after loading to unlock audio
- Check the 🔊/🔇 toggle in the top-right corner

**Board doesn't fit / puzzle overflows**
- Use the live tile preview in the host panel — it turns red if the puzzle is too long
- Maximum ~52 tiles across 4 rows of 14 columns
- Break long puzzles into shorter phrases

**Host refreshed and lost the game**
- Click **🔄 Rejoin Existing Game** in the setup panel — reconnects to the last game automatically

**Player phone went to sleep**
- Players reload `index.html` — session is saved, they reconnect automatically

---

## 🛡️ Security Note

The Firebase config is visible in the public repo. The database rules are open read/write — appropriate for a private party game. If you want to restrict access, add [Firebase App Check](https://firebase.google.com/docs/app-check) or tighten the database rules after launch.

---

## 🏗️ Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- **Realtime sync**: Firebase Realtime Database (free Spark tier)
- **Hosting**: GitHub Pages
- **Audio**: Web Audio API (no libraries)
- **QR Code**: [qrcode.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) via cdnjs
- **Fonts**: Google Fonts (Bebas Neue + Nunito)

---

## 📄 License

Built for private party use. Have fun, drink responsibly.
