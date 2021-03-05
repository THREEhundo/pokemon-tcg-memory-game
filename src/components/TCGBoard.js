import React from "react";

const TCGBoard = (props) => {
  const {
    firstGroup,
    secondGroup,
    thirdGroup,
    fourthGroup,
    fifthGroup,
    sixthGroup,
    seventhGroup,
    eighthGroup,
    ninthGroup,
    tenthGroup,
    switchPokeView,
    currentScore,
    highScore,
    shuffle,
  } = props;

  function newDeck() {
    if (firstGroup !== null && currentScore.current <= 9) {
      return switchPokeView(shuffle(firstGroup.map((x) => x)));
    } else if (firstGroup !== null && currentScore.current <= 19) {
      return switchPokeView(shuffle(secondGroup.map((x) => x)));
    } else if (secondGroup !== null && currentScore.current <= 29) {
      return switchPokeView(shuffle(thirdGroup.map((x) => x)));
    } else if (thirdGroup !== null && currentScore.current <= 39) {
      return switchPokeView(shuffle(fourthGroup.map((x) => x)));
    } else if (fourthGroup !== null && currentScore.current <= 49) {
      return switchPokeView(shuffle(fourthGroup.map((x) => x)));
    } else if (fifthGroup !== null && currentScore.current <= 59) {
      return switchPokeView(shuffle(fifthGroup.map((x) => x)));
    } else if (sixthGroup !== null && currentScore.current <= 59) {
      return switchPokeView(shuffle(sixthGroup.map((x) => x)));
    } else if (seventhGroup !== null && currentScore.current <= 69) {
      return switchPokeView(shuffle(seventhGroup.map((x) => x)));
    } else if (eighthGroup !== null && currentScore.current <= 79) {
      return switchPokeView(shuffle(eighthGroup.map((x) => x)));
    } else if (ninthGroup !== null && currentScore.current <= 89) {
      return switchPokeView(shuffle(ninthGroup.map((x) => x)));
    } else if (tenthGroup !== null && currentScore.current <= 99) {
      return switchPokeView(shuffle(tenthGroup.map((x) => x)));
    } else if (currentScore.current === 100) {
      return <div>You Win!</div>;
    } else {
      return <div>...Loading</div>;
    }
  }

  const switchDecks = newDeck();

  return (
    <div>
      <div id="scoreBoard">
        <div id="currentScore">
          <img
            src="https://fontmeme.com/permalink/210302/85e7558e3bc0b2b9b081d06952401a81.png"
            id="currentImg"
            alt="currentScore"
          />
          : {currentScore.current}
        </div>
        <div id="highScore">
          <img
            src="https://fontmeme.com/permalink/210302/34a426d0ccc503a37ea413d14d8ddb10.png"
            id="highImg"
            alt="highScore"
          />
          : {highScore.current}
        </div>
      </div>
      <div id="info">
        <p>Get points by clicking on an image. Not more than once!</p>
        <p>There are 10 rounds to beat!</p>
      </div>
      <ul>{switchDecks}</ul>
    </div>
  );
};

export default TCGBoard;
