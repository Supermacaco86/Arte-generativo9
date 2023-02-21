function setup() {
  createCanvas(4000, 4000);

  for(let i = 0; i < 100000 ; i++){
    let x = random(0, width);
    let y = random(0, height);

    fill(random(0, 255));
    ellipse(x, y, 20);
  }
}

