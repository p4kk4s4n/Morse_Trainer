# 📻 Morse Trainer

Learn Morse code by ear, master on-air amateur radio shorthand, and build fast audio reflexes. 

Everything — audio synthesis, offline database, mobile touch controls, haptic vibration, and offline PWA support — is self-contained in a single file (`index.html`).

---

## 🚀 Quick Setup & How to Run

### Option 1: Play in Any Web Browser (Easiest)
- Simply double-click **`index.html`** on any computer, tablet, or phone. It has zero external dependencies and works instantly offline.
- If deployed to GitHub Pages or any static host, open the live URL on your phone or computer.

### Option 2: Install as a Fullscreen Mobile App (Works 100% Offline)
- **On Android (Chrome):** Tap the **"📲 Install app"** button on the home screen (or tap the browser menu `⋮` → **Add to Home screen** / **Install app**).
- **On iPhone / iPad (Safari):** Tap the **Share** button (`⎋`) → **Add to Home Screen**.
- Once added, the trainer launches fullscreen without browser bars and works even in Airplane Mode without internet.

---

## 🎯 How to Learn: The Golden Rule

> [!TIP]
> **Don't count dots and dashes!**
> Morse code is a rhythmic musical language. If you try to mentally visualize "dot-dash-dot" for the letter `R`, your brain will hit a speed bottleneck.
> Instead, listen to the complete sound pattern as a melody: **`di-dah-dit`**.
> 
> The trainer uses **Farnsworth timing** (20 WPM character speed with stretched gaps) so you learn the authentic high-speed rhythm of every sound from day one, with extra time to think between letters.

---

## 🎮 Game Modes & How to Play

### 🎧 1. Koch Trainer (Set 1: Character Mastery)
The gold standard method for learning Morse code:
- **How it works:** You start with just 2 characters (`K` and `M`). Listen to a group of characters played through your speakers, then type or tap what you heard.
- **Advancing:** When you score **90% accuracy** or higher across a round, you unlock the next character in the Koch sequence (`R`, then `S`, `U`, `A`, `P`, `T`, etc.).
- **Milestone Badges:** Earn 8 milestone badges at Lessons 1, 5, 10, 15, 20, 25, 30, and 35.
- **Words & Callsigns Practice (Unlocks at Lesson 20):** Once you complete Lesson 20, you can toggle practice from random letter groups to real English words and amateur callsigns formed **strictly from the characters you have learned so far**.

---

### 📻 2. Q-Codes & Callsigns (Set 2: On-Air CW)
Learn how amateur radio operators actually communicate on the air:
- **Part A: Study & Meaning Drills (Lessons 1–6, Unlocks after Set 1, Lesson 15):**
  - Learn the 30 most critical on-air CW abbreviations, prosigns, and Q-codes (`CQ`, `DE`, `K`, `TU`, `73`, `RST`, `QTH`, `QRM`, `QRN`, `QSB`, `QRS`, `QRP`, `QSL`, `QRZ`, `SK`, etc.) with explanations and clickable Morse audio examples.
  - Take the 10-question **Audio & Meaning Quiz** (tests both *Audio/Code → Meaning* and *Meaning → Code*).
- **Part B: Live Ear-Copy Practice (Lessons 7–15, Unlocks after Set 1, Lesson 30 + Part A):**
  - Copy rapid on-air exchanges by ear: core Q-codes, 3-digit signal reports (`599`), wattage figures (`50W`), and realistic synthesized US, DX, and portable (`/P`) callsigns.
- **Milestone Badges:** Earn 6 Set 2 badges at Lessons 1, 3, 6, 9, 12, and 15 (`📖 Code Scholar`, `🧭 Lingo Navigator`, `🎓 Lingo Graduate`, `🎙️ Traffic Copyist`, `📡 Callsign Ranger`, and `🌐 DX Ragchewer`).

---

### 📅 3. Daily Practice
- A focused **5-minute timed workout** designed to keep your skills sharp.
- Uses **spaced repetition (Leitner box system)**: characters you find difficult or haven't practiced recently come up more often.
- Maintain your daily goal streak (`🔥`) by practicing a few minutes every day.

---

### 🕹️ 4. Arcade Mode
- Fast-paced arcade reflex trainer!
- Bubbles drop from the top of the screen while their Morse audio plays.
- Type each letter before it hits the red danger line to pop the bubble, earn points, and build combos.
- You have 3 lives; speed increases as you level up.

---

### 👆 5. Send with a Key
- Straight-key transmitter trainer.
- **Controls:** Tap quickly for a dit (`·`) and hold ~3× longer for a dah (`−`) using the large on-screen paddle button or your physical **Spacebar**.
- Features live tone audio, a visual dit/dah timing meter, and automatic character decoding.
- Great for training muscle memory and learning clean sending rhythm (1 : 3 timing ratio).

---

### 📡 6. Morse Tree (Interactive Branching System)
- Authentic orthogonal branching diagram modeled after the classic Morse code keychain reference chart (`MORSE 📡 CODE`), featuring pure 90-degree pipe routing with zero diagonal lines and zero plain dots. Dits are represented as circles (`●`) and dahs as horizontal/vertical bars (`▬` / `▮`).
- **3 Dedicated Trees (Top Tabs):**
  - **`ABC` (Letters):** Full 26-letter keychain chart (`A–Z`).
  - **`123` (Numbers):** Symmetrical 10-digit tree (`0–9`) arranged with dahs descending the left spine (`0, 9, 8, 7, 6`) and dits descending the right spine (`5, 4, 3, 2, 1`).
  - **`.,?/` (Punctuation):** Full 12-symbol standard International Morse punctuation suite (`.` `,` `?` `/` `=` `@` `+` `-` `'` `:` `"` `(`). Target symbols glow in cyan with high-contrast labels.
- **Zero Horizontal Scrolling:** Optimized responsive layout where all controls, live decoded tape, and SVG trees scale smoothly to mobile screens without left-right scrolling.
- **Scoped Practice Sub-Modes:**
  - **Explore:** Tap any node to hear and watch its animated path, or key freely onto the decoded tape.
  - **Find:** Key a prompted character down the tree; prompts are strictly scoped to the active tab's character set.
  - **Ear Trace:** Listen to a mystery sound from the active set and trace its rhythm down the tree. Includes a "Reveal" button to demonstrate the path.
- **Input Methods:** Switch anytime between **1 Button** (Press & hold keyer with visual timing meter) and **2 Buttons** (`· Dit` / `− Dah`).
- **Progress Preservation:** Your last-used tree tab is remembered automatically, and active time spent practicing counts directly toward your daily streak (`🔥`).

---

## 📱 Mobile-Friendly Controls & Settings

Tap the **Settings** tab (gear icon) to customize your experience:

- **On-Screen Input Modes:**
  - **Auto (Cards → Keys):** Lessons 1–4 use large multiple-choice cards; Lesson 5+ switches to a keypad of your unlocked letters.
  - **Key grid:** Displays only your unlocked characters in a tidy grid (no hunting through a full QWERTY keyboard).
  - **· / − Pad:** Tap `·` (dit) and `−` (dah) to echo the rhythm you heard; auto-commits each letter.
  - **Morse tree:** Step left (`·`) or right (`−`) down the binary tree to select characters.
- **Character Key Order:** Sort keys by **Order learned (Koch)** or **Alphabetical (A–Z)**.
- **Haptic Vibration:** Tactile vibration on supported devices (Android) matching the dits and dahs played by the audio engine.
- **Speed & Farnsworth Timing:** Adjust **Character speed** (15–30 WPM), **Overall speed** (5–30 WPM), and **Tone pitch** (400–900 Hz).

---

## 📊 Progress & Stats Tracking

Open the **Progress** tab (bar chart icon) to inspect your stats:
- **Streak & Practiced Time:** Daily streak counter (`🔥`) and total practice time.
- **Accuracy Heatmap:** Green/yellow/red color-coded breakdown of every character in the Morse alphabet.
- **Words & Callsigns Library:** An interactive library of real English words and callsigns you can spell using your unlocked letters. Tap any word to hear it in Morse!
- **Curriculum Roadmap (54 Lessons):** View both completed lessons (marked with `✓`) and upcoming lessons (`▶ Up next` / `🔒 Locked`). Tap any lesson to preview its introduced sounds!

---

## 🔄 Updating to a New Version Deployed on GitHub

When a new version is pushed to GitHub Pages, you can update directly from within the app without losing your training progress, streak, or custom settings:

1. Tap the **Settings** tab (⚙️ gear icon).
2. Scroll down to the **"Data & offline"** section. You can see your currently installed version tag (e.g. `Version v14`).
3. Tap **"🔄 Check for update & reload"**.
4. The app checks GitHub for the latest release, clears the offline file cache, and refreshes the app:
   - If an update is detected, a toast notification confirms: **`Update completed to version vX`**.
   - If you are already up-to-date, a toast confirms: **`Version vX is latest release already`**.
   - All your lesson progress, streaks, badges, and settings in local storage are **100% preserved**.

---

## 💾 How to Backup & Restore Your Progress

Your lesson progress, streaks, milestone badges, and spaced repetition memory boxes are saved directly in your browser's local storage (`localStorage`). This means your progress remains completely safe across software updates on GitHub Pages!

To move your progress to another device (e.g. from your phone to your computer) or keep a safe backup before clearing browser data:

### 📤 How to Create a Backup

1. In the app, tap the **Settings** tab (⚙️ gear icon in the bottom navigation bar).
2. Scroll down to the **"Data & offline"** section.
3. Tap **"Copy progress backup"**.
   - If supported by your browser, your full progress code is copied directly to your clipboard.
   - If prompted, you can select and copy the text string manually.
4. Paste and save this text string somewhere safe (such as Notes, an email to yourself, or a text file).

### 📥 How to Restore Your Progress

1. Copy your previously saved backup text string to your clipboard.
2. Open the Morse Trainer app on any phone, tablet, or computer.
3. Tap the **Settings** tab (⚙️ gear icon).
4. Scroll down to **"Data & offline"** and tap **"Restore from backup"**.
5. Paste your backup text into the dialog prompt and tap **OK**.
6. The app will confirm `Restored.` and immediately take you to the Home screen with your exact lesson level, streak, custom settings, and earned badges fully intact.

> [!TIP]
> **Switching Devices or Browsers?**
> Because browser local storage is private to each browser app (Safari, Chrome, Firefox), use this backup and restore process whenever you want to transfer your training progress from your phone to your laptop or across different browsers.
