let rows = 2,
    cols = 4,
    cards = [],
    cardsw, cardsh;

let options = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

let am = 30,
    bm = 10;

let stage = 1,
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
      cards.push(new Card((cardsw * x + am / 2) + (cardsw / 2), (cardsh * y + am / 2) + (cardsh / 2), cser, false));
    }
  }
}

function draw() {
  background(28);
  for (let i = 0; i < cards.length; i++) {
    cards[i].update();
    cards[i].show();
  }
}
