# Hangman Game

A classic Hangman game built using React and TypeScript, where the hangman figure is dynamically drawn using `div` tags and flexbox for layout. Players guess the hidden word one letter at a time while trying to avoid drawing the full stick figure. The game ends when the word is fully guessed or the stick figure is completed.

## Features

- Interactive gameplay with letter guessing.
- The hangman character is drawn incrementally with each incorrect guess using `div` elements and flexbox.
- Alerts for game win or loss conditions.
- Clean and responsive UI design.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/noblefinsand/Hangman.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hangman
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The game will be available at `http://localhost:3000`.

## How to Play

- The objective is to guess the hidden word by selecting letters.
- For each wrong guess, part of the hangman character is drawn using `div` tags styled with flexbox.
- The game ends when the word is fully guessed or the hangman is fully drawn.
- Use your keyboard to guess a correct letter.

## Technologies Used

- React (with hooks for state management)
- TypeScript
- Flexbox for hangman drawing
- CSS for overall styling

## Future Improvements

- Implement difficulty levels.
- Add a scoring system.
- Multiplayer mode.
