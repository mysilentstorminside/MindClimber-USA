# MindClimber — USA Edition

A mobile trivia climbing game: answer questions correctly to climb 30 steps. Play solo or online with up to 5 friends.

## What's inside
- `index.html`, `game.js`, `game.css`: the game (fully in English)
- `questions_data.js`: 1,064 core questions in 9 categories (easy / medium / hard),
  including 119 flag questions and 75 real-map questions ("Which country is highlighted in red?")
- `additional_questions.js`: 5,000 extra questions, merged in automatically
- `Assets/`: avatars, logo, mountain backgrounds, flags (`questions_pics/`) and maps (`questions_pics/maps/`)

Total: **6,064 questions**.

## Categories
History & Mythology · Geography · Science & Nature · Arts & Literature · Entertainment & Pop Culture · Sports · Psychology & Human Behavior · Image Recognition (flags and maps) · ONLY USA

## Sources and licenses
- Core questions: written for MindClimber and checked against trusted U.S. sources (USCIS 2025 Civics Test,
  NASA, National Park Service, NOAA, Smithsonian, Library of Congress, Pulitzer Prizes, Academy Awards, AFI,
  American Psychological Association, official league records).
- Maps: drawn from Natural Earth country boundaries (public domain, naturalearthdata.com). Each map shows the
  highlighted country in red within its wider region; very small countries also get a red circle.
- `additional_questions.js`: adapted from OpenTriviaQA (https://github.com/uberspot/OpenTriviaQA) under
  CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/), plus 90 original psychology questions.
  The credit line in the "How to play" window is required by that license. Keep it.

## Publishing on GitHub Pages
The asset folder must be named exactly `Assets` (Latin capital A). GitHub Pages is case-sensitive.
1. Upload to the repository root, replacing the old files: `index.html`, `game.js`, `game.css`,
   `questions_data.js`, `additional_questions.js`.
2. Upload the folder `Assets/questions_pics/maps/` (75 map images). The rest of `Assets` is already on GitHub.
3. Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
4. Open the site on a phone. On a desktop browser the game shows a "Mobile only" message by design.
