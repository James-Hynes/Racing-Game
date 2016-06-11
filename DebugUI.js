function drawPerformanceInfo() {
  var keys = Object.keys(blocks);
  for(var i = 1; i < keys.length; i++) {
    stroke(0);
    text(`${keys[i]}: ${Math.trunc((blocks[keys[i]][1] / blocks['gameLoop'][1]) * 100)}%`, (i * 200) - 150, 200);
  }
}

function drawTable() {
  var keys = Object.keys(blocks);
  push();
  stroke(0);
  rectMode(CORNER);
  fill(68, 70, 118, 200);
  rect(0, 0, 500, 200);
  for(var i = 0; i < 3; i++) {
    line(i * (500 / 3), 0, i * (500 / 3), 200);
  }

  textSize(16);
  fill(220);
  textAlign(CENTER);
  text('Block Name', (500 / 3) / 2, (200 / keys.length) - 10);
  text('Block Percent', (500 / 3) * 1.5, (200 / keys.length) - 10);
  text('Block Time', (500 / 3) * 2.5, (200 / keys.length) - 10);

  for(var i = 1; i < keys.length; i++) {
    stroke(0);
    line(0, i * (200 / keys.length), 500, i * (200 / keys.length));
    text(keys[i], (500 / 3) / 2, (i + 1) * (200 / keys.length) - 10);
    text(`${Math.trunc((blocks[keys[i]][1] / blocks['gameLoop'][1]) * 100)}%`, (500 / 3) * 1.5, (i + 1) * (200 / keys.length) - 10);
    text(`${(blocks[keys[i]][1]).toFixed(3)}ms`, (500 / 3) * 2.5, (i + 1) * (200 / keys.length) - 10);
  }
  pop();
}
