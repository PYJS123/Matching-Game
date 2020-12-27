let rows = 2,
    cols = 4,
    cards = [],
    cardsw, cardsh;

let options = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

let am = 30,
    bm = 10;

let stage = 1, // Max stage is 4: Thinking, 1st Card, 2nd Card, Checking
    picked = [];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  cardsw = (width - am) / cols;
  cardsh = (height - am) / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let s = floor(random(options.length));
      cser = options[s];
      options.splice(s, 1);
      cards.push(new Card((cardsw * x + am / 2) + (cardsw / 2), (cardsh * y + am / 2) + (cardsh / 2), cser, true));
    }
  }
}

function draw() {
  background(28);
  for (let i = 0; i < cards.length; i++) {
    cards[i].update();
    cards[i].show();
  }

  if (stage == 3) {
    if (picked.length == 2 && cards[picked[0]].stat == cards[picked[1]].stat) {
      console.log('You win!');
      picked = [];
      setTimeout(() => {
        stage == 1;
      }, 2000);
    } else {
      console.log('You lose!');
      picked = [];
      setTimeout(() => {
        stage == 1;
      }, 2000);
    }
  }
}

function mousePressed() {
  if (stage == 1 || stage == 2) {
    for (let i = 0; i < cards.length; i++) {
      let chos = false;
      if ((mouseX > cards[i].x - (cardsw - (bm / 2)) / 2) && (mouseX < cards[i].x + (cardsw - (bm / 2)) / 2) && (mouseY > cards[i].y - (cardsw - (bm / 2)) / 2) && (mouseY < cards[i].y + (cardsw - (bm / 2)) / 2)) {
        if (!chos && picked[0] != i && picked[1] != i) {
          picked.push(i);
          cards[i].hidden = false;
          chos = true;
          stage++;
        }
      }
    }
  }
}
