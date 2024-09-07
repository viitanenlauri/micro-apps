# Lottery Guessing Game

This is a simple lottery guessing game implemented in JavaScript. Users input their guesses
(node lotto.js <numbers> [log]) and the program compares them to randomly generated numbers,
providing feedback on the number of correct guesses and how long it takes to get a winning result.

## Features

- User inputs seven numbers between 1 and 40.
- The program generates seven random numbers and compares them with the user's guesses.
- Tracks the number of correct guesses and how many iterations (weeks) it takes to get all seven numbers correct.
- Optional logging to keep track of game progress.

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies:**

    This project does not have external dependencies, but you should ensure Node.js is installed.

3. **Run the app**
    node lotto.js <numbers> [log]
    - Replace <numbers> with seven numbers between 1 and 40 (e.g., 1 2 3 4 5 6 7).
    - Add log as an optional argument to log the game progress.

**Example**
    node lotto.js 1 2 3 4 5 6 7 log

**Code Explanation**
- main(): Handles the main logic of the game, including whether to log the game progress or just track the number of correct guesses.
- saveGuess(): Validates and saves user input numbers.
- printInput(): Prints the user's input in the desired format.
- randomNum(): Generates and prints seven random numbers.
- Leprechaun(): Compares the user’s guesses with the random numbers and tracks the number of correct guesses.

**Future addons**
Joker numbers? Visualization of the game progress? Welcome Screen?