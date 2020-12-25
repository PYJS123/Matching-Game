class Card {
  constructor(x, y, stat, hidden) {
    this.x = x;
    this.y = y;
    this.stat = stat;
    this.hidden = hidden;
  }

  update() {

  }

  show() {
    fill(51);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, cardsw - (bm / 2), cardsh - (bm / 2));
    if (!this.hidden) {
      fill(255);
      textSize((cardsh - (bm / 2)) / 3);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text(this.stat, this.x, this.y);
    }
  }
}

