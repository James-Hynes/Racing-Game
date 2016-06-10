class Game {
	constructor() {
    this.debug = false;
		this.player = new Car([0, 0], '10.png', 0.5);
		this.items = new Group();
		this.items.add(new Sprite([500, 500], 'tree_large.png', 0.5));
	}

	display() {
		clear();
		this.player.display();
		this.items.display();

		START_BLOCK('drawDebug');
    if(this.debug) {
      this.player.drawDebugInfo();
			this.items.drawDebugInfo();
    }
		END_BLOCK('drawDebug');
	}

	update() {
		this.player.update();
		this.items.update();

		START_BLOCK('collision');
		if(this.items.colliding(this.player)) {

		}
		END_BLOCK('collision');

	}

  handleKeyInput(keyCode, pressed) {
    switch(keyCode) {
      case 113: (this.debug === true) ? this.debug = false : this.debug = true; break;
    }
  }
}


// if game.debug -> draw rectangle around each sprite, bounding boxes.
