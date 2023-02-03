const svgDOM = document.querySelector(".root"); // Get ellemnt we will render our graph
const percentDOM = document.querySelector(".percent");

const width = 400; // the width of graph
const height = 400; // the height of graph
const dataCount = 10000; // points count to our ai most guess

// points to ai most guess
const data = Array.from({ length: dataCount }, () =>
  randomPoint({ end: width }, { end: height }),
);

// https://shorturl.at/giST0 Just a random number !!
let wheight = randomPoint({ start: -1, end: 1 }, { start: -1, end: 1 });

const svg = () => `<svg width='${width}' height='${height}'>

  ${data.map(
    point =>
      `<circle 
    cx="${point.x}"
    cy="${point.y}"
    r="2"
    fill="${guess(wheight, point) == 1 ? "red" : "blue"}"/>`,
  )}

  <line x1=0 x2=${width} y1=0 y2=${height} stroke='black'>
</svg>`;

function correctTeam(point) {
  return point.x > point.y ? 1 : 0;
}

function guess(wheight, point) {
  const sum = wheight.x * point.x + wheight.y * point.y;
  return step(sum);
}

function teach(dataTrainCount) {
  // points to train ai
  const dataTrain = Array.from({ length: dataTrainCount }, () =>
    randomPoint({ end: width }, { end: height }),
  );

  let testCount = 1;
  let correctGuess = 0;
  let accuracy = 0;

  for (let i = 0; i < testCount; i++) {
    dataTrain.forEach(point => {
      const ai_guess = guess(wheight, point);
      const correct = correctTeam(point);

      const error = correct - ai_guess;

      wheight.x += point.x * error * 0.001;
      wheight.y += point.y * error * 0.001;

      if (correct === ai_guess) correctGuess++;
    });

    accuracy = correctGuess / dataTrain.length;
    correctGuess = 0;
  }

  percentDOM.textContent = `${accuracy * 100}%`;
}

render(svgDOM, svg());

