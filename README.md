# Pokemon Trading Card Memory Game

## Description

This is a memory game. It's a fun app if you were into the Pokemon Trading Card Game when you were a kid, or if you are into them now. 10 Cards per round are shown. The cards are reshuffled after every click. Once all 10 are clicked a new deck is shown. If the same card is clicked twice the game resets. There are 10 decks to get through to win.

## Technology Used

HTML5
CSS
JavaScript
ReactJS

## Pain Spots

-Switching from using thenables to try catch.
<br />
-Ordering the implementation of states.
<br />
-Understanding that useEffects ran from top to bottom.
<br />
-Used multiple useEffects for connected states which created an endless loop. Combined into the useEffect that had the data fetched.
<br />
-Changed currentScore and highScore from useStates to useRefs.
