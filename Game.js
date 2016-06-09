class Game {
	constructor() {
    this.debug = false;
		this.player = new Car([300, 200], '10.png', 0.5);
		this.items = new Group();
		this.items.add(new Sprite([500, 500], 'tree_large.png', 0.5));
	}

	display() {
		clear();
		this.player.display();
		this.items.display();
    if(this.debug) {
      this.player.drawDebugInfo();
			this.items.drawDebugInfo();
    }
	}

	update() {
		this.player.update();
		this.items.update();

		if(this.items.colliding(this.player)) {
			console.log('2');
		}
	}

  handleKeyInput(keyCode, pressed) {
    switch(keyCode) {
      case 113: (this.debug === true) ? this.debug = false : this.debug = true; break;
    }
  }
}


// if game.debug -> draw rectangle around each sprite, bounding boxes.
