# CodePuzzle

**Tier:** 3–Advanced  

**CodePuzzle** is an educational coding game where users are given a scrambled set of code blocks and must rearrange them in the correct order to produce the desired output.  
It aims to teach programming logic, sequencing, and debugging skills through visual interaction rather than text-based challenges.  
The app can target **beginners in programming** or serve as a **puzzle-based learning platform** for schools, bootcamps, and online coding communities.  

---

## Objective
> Help users understand programming logic by solving structured “code puzzles” that simulate real debugging and syntax ordering challenges.

---

## User Stories
- [ ] User can view a set of code blocks arranged randomly on the screen.  
- [ ] User can drag and drop the blocks to reorder them.  
- [ ] User can press a “Run Code” button to execute the arranged code.  
- [ ] User can view the program output and see if it matches the expected output.  
- [ ] User can retry the puzzle after a failed attempt.  
- [ ] User can view the difficulty level (Easy, Medium, Hard) and select one.  
- [ ] User can progress through a sequence of puzzles and track completion.

---

## Bonus Features
- [ ] **Puzzle Creation Mode:** Users can design their own code puzzles and share them with others.  
- [ ] **Multiple Languages:** Support syntax and semantics for JavaScript, Python, and C++.  
- [ ] **Hints System:** Offer optional hints or highlight incorrect code blocks.  
- [ ] **Leaderboard:** Track fastest completions or least attempts.  
- [ ] **AI Puzzle Generator:** Automatically generate puzzles by taking a simple code snippet and shuffling logical units.  
- [ ] **WebAssembly Sandbox:** Execute code safely inside a WASM sandbox instead of `eval()` for better performance and security.  

---

## Technical Suggestions
- **Frontend:** React or Vue for component-based block rendering and drag/drop mechanics.  
- **Logic Engine:** Parse code blocks using a small custom interpreter or library like [Esprima](https://esprima.org/).  
- **Drag & Drop:** Use [React DnD](https://react-dnd.github.io/react-dnd/about) or [interact.js](https://interactjs.io/).  
- **Execution:**  
  - JS mode → sandbox via Web Workers  
  - Python mode → [Skulpt](https://skulpt.org/)  
  - C++ mode → [WebAssembly/Clang](https://emscripten.org/)  
- **Data Persistence:** Firebase or Supabase for saving puzzles and scores.  

---

## Useful Links and Resources
- [Monaco Editor (VS Code Core)](https://microsoft.github.io/monaco-editor/) – for code previews.  
- [Blockly by Google](https://developers.google.com/blockly) – to create visual code block systems.  
- [Skulpt (Python in Browser)](https://skulpt.org/) – Python interpreter in JavaScript.  
- [Emscripten](https://emscripten.org/) – Compile C++ to WebAssembly.  
- [React DnD](https://react-dnd.github.io/react-dnd/about) – drag-and-drop system for React.  

---

## Example Projects
- [Google Blockly Games](https://blockly.games/)  
- [Codingame](https://www.codingame.com/start)  
- [Scratch by MIT](https://scratch.mit.edu/)  
