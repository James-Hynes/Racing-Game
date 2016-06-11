"use strict";

var game;
function setup() {
	createCanvas(windowWidth, windowHeight);
	game = new Game();
}

function draw() {
	if(!game.paused) {
		START_BLOCK('gameLoop');
		background(0, 0, 0);

		START_BLOCK('keyInput');
		game.player.handleKeyInput();
		END_BLOCK('keyInput');

		game.display();
		game.update();
		END_BLOCK('gameLoop');

		if(game.debug) {
			drawTable();
		}
	}
}

function keyPressed() {
	game.handleKeyInput(keyCode, true);
}
