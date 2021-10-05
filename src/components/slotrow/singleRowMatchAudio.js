let singleRowMatchAudio1 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio2 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio3 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio4 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio5 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio6 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio7 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio8 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);
let singleRowMatchAudio9 = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleRowMatch.wav"
);

export const playSingleRowMatchAudio = (colPosition, rowIsAMatch) => {
  if (colPosition.col === 1 && rowIsAMatch) {
    if (colPosition.row === 1) {
      setTimeout(() => {
        singleRowMatchAudio1.play();
      }, 250);
    }
    if (colPosition.row === 2) {
      setTimeout(() => {
        singleRowMatchAudio2.play();
      }, 250);
    }
    if (colPosition.row === 3) {
      setTimeout(() => {
        singleRowMatchAudio3.play();
      }, 250);
    }
  }

  if (colPosition.col === 2 && rowIsAMatch) {
    if (colPosition.row === 1) {
      setTimeout(() => {
        singleRowMatchAudio4.play();
      }, 500);
    }
    if (colPosition.row === 2) {
      setTimeout(() => {
        singleRowMatchAudio5.play();
      }, 500);
    }
    if (colPosition.row === 3) {
      setTimeout(() => {
        singleRowMatchAudio6.play();
      }, 500);
    }
  }

  if (colPosition.col === 3 && rowIsAMatch) {
    if (colPosition.row === 1) {
      setTimeout(() => {
        singleRowMatchAudio7.play();
      }, 750);
    }
    if (colPosition.row === 2) {
      setTimeout(() => {
        singleRowMatchAudio8.play();
      }, 750);
    }
    if (colPosition.row === 3) {
      setTimeout(() => {
        singleRowMatchAudio9.play();
      }, 750);
    }
  }
};
