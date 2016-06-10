"use strict";

var game;
function setup() {
	createCanvas(windowWidth, windowHeight);
	game = new Game();
}

function draw() {
	START_BLOCK('gameLoop');
	background(0, 0, 0);
	game.player.handleKeyInput();
	game.display();
	game.update();
	END_BLOCK('gameLoop');

	if(game.debug) {
		var keys = Object.keys(blocks);
		for(var i = 0; i < keys.length; i++) {
			text(`${keys[i]}: ${blocks[keys[i]][1]}`, i * 200, 200);
		}
	}
}

function keyPressed() {
	game.handleKeyInput(keyCode, true);
}
