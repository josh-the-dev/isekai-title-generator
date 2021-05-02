const goals = ["my waifu", "a bunch of treasure", "answers"];
const reincarnated = ["chainsaw", "dog", "cat", "lion", "bear", "slime"];
const nonExistant = ["Manners ", "Men", "Women", "Animals"];
const monsters = ["demon lord", "evil sorceror", "granny"];
const actions = [
  "mowing my lawn",
  "walking my dog",
  "taking a selfie",
  "run over by a car",
];

function randomNumber(numberOfElements) {
  return Math.floor(Math.random() * numberOfElements);
}

function generateIsekai() {
  const sentenceNumber = randomNumber(2);
  let sentence = "";
  if (sentenceNumber === 1) {
    sentence = `I was ${
      actions[randomNumber(actions.length)]
    } and was reincarnated as a ${
      reincarnated[randomNumber(reincarnated.length)]
    } in a world where ${
      nonExistant[randomNumber(nonExistant.length)]
    } don't exist.`;
  } else {
    sentence = `I have got to defeat the ${
      monsters[randomNumber(monsters.length)]
    } so that I can get ${
      goals[randomNumber(goals.length)]
    } but I just got transformed into a ${
      reincarnated[randomNumber(reincarnated.length)]
    }`;
  }

  const isekaiElement = document.getElementById("IsekaiTitle");
  isekaiElement.innerHTML = sentence;
}

generateIsekai();
