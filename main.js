"use strict";

var game;
function setup() {
	createCanvas(windowWidth, windowHeight);
	game = new Game();
}

function draw() {
	background(0, 0, 0);
	game.player.handleKeyInput();
	game.display();
	game.update();
}

function keyPressed() {
	game.handleKeyInput(keyCode, true);
}
