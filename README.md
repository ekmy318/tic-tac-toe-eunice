# :x::o: Tic-Tac-Toe :o::x:
The first game most people learn how to play is tic-tac-toe. A simple game on a 3x3 grid with the winning goal of getting the player's mark three in a row horizontally, vertically or diagonally. (Taking turns, of course!)

That same simple game drawn on a piece of paper with game logic effortlessly deduced by the human brain does not translate to the same "simple" game to a developer. Everything from coding the individual cells in the grid to marking the correct sign on a click to implementing winner combinations must be thoughtfully and methodically written for the computer to understand. Additionally for this project, the developer is interacting with a third-party API so there's even more factors to consider when building the game!

## Technologies Used
- Javascript
- HTML
- AJAX
- jQuery
- CSS/SCSS
- Bootstrap

## The Development
Best practice for new project starting point is wireframing! I grabbed my :pencil2: and sketched a general layout and flow of what the browser will render as the game is played.

![wireframe](https://i.imgur.com/Kn2JfDG.jpg?1)

With a general idea in mind, I started building the HTML and incorporated Javascript and jQuery to give function to the game. From here, I simultaniously worked on the game logic and interaction with the API which proved to be the most challenging aspect of the project! Nonetheless, when the game and project requirements list seemed endless and at every corner was a problem I didn't know how to solve, the best problem-strategy I found was:
1. :question: Break down the problem to simple blocks - What specifically am I trying to achieve?
2. :books: Still stuck? Research previous issues.
3. :outbox_tray: Still stuck? Submit an issue to the instructional team.
4. :two_women_holding_hands: Still stuck? Talk with a fellow dev to a get different perspective.

Most importantly, follow the golden rule: :mega: **CONSOLE LOG EVERYTHING.** :mega:

## User Stories
- As a player, I want to be able to create a new account.
- As a player, I want to be able to play a quick game with a guest signin.
- As a signed in player, I want to be change my password.
- As a signed in player, I want to be able to track my game stats.
- As a player, I want to log out so other players can play the game in their account, and not mine.
- As a player, I want to know if I won, lost or tied the game.

## Future Iterations
- AI Bot: allow user to play against a computer AI.
- Responsive Design: allow user functionality on mobile experience.
- Custom Tokens
- Session Data: Keep track of multiple game rounds within one session with a win counter.
