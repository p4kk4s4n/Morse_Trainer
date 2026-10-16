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

Open the **Progress** tab to inspect your stats:
- **Streak & Practiced Time:** Daily streak counter and total practice time.
- **Accuracy Heatmap:** Green/yellow/red color-coded breakdown of every character in the Morse alphabet.
- **Words & Callsigns Library:** An interactive library of real English words and callsigns you can spell using your unlocked letters. Tap any word to hear it in Morse!
- **Curriculum Roadmap (54 Lessons):** View both completed lessons (marked with `✓`) and upcoming lessons (`▶ Up next` / `🔒 Locked`). Tap any lesson to preview its introduced sounds!
- **Data Backup & Restore:** Export a one-click JSON backup of your progress to transfer between devices.
