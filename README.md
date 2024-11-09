# Number Guessing Game

## Description

This is a simple number guessing game implemented in JavaScript. The game generates a random number between 1 and 20, and the player tries to guess it. The game provides feedback on whether the guess is too high or too low, and keeps track of the player's score and high score.

## Features

- Random number generation between 1 and 20
- Score tracking (starts at 20 and decreases with wrong guesses)
- High score tracking
- Visual feedback (background color changes on correct guess)
- Reset functionality to start a new game

## How to Play

1. Open the HTML file in a web browser.
2. You'll see a question mark (?) representing the hidden number.
3. Enter your guess in the input field.
4. Click the "Check!" button to submit your guess.
5. The game will provide feedback:
   - "🚫 Not allowed" if no number is entered
   - "⬆️ Too High" if your guess is higher than the hidden number
   - "⬇️ Too low" if your guess is lower than the hidden number
   - "🎉 Correct Answer" if you guess the correct number
6. Your score starts at 20 and decreases by 1 with each incorrect guess.
7. If your score reaches 0, you lose the game.
8. If you guess correctly, your current score becomes your high score if it's higher than the previous high score.
9. Click the "Again!" button to start a new game.

## Code Structure

The game logic is implemented in JavaScript and includes the following main components:

- Random number generation
- Event listener for the "Check!" button
- Event listener for the "Again!" button
- Score and high score tracking
- Display message function for user feedback

## Future Improvements

- Add difficulty levels (e.g., larger number range for harder difficulty)
- Implement a timer for added challenge
- Add sound effects for correct/incorrect guesses
- Create a leaderboard for multiple players

## Contributing

Feel free to fork this project and submit pull requests with improvements or new features!

## License

This project is open source and available under the [MIT License](LICENSE).
