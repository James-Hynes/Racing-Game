class Game {
	constructor() {
    this.debug = false;
		this.player = new Car([200, 400], '10.png', 0.5);
		this.items = new Group();
		this.items.add(new Sprite([0, 0], 'tree_large.png', 0.5));
		this.items.add(new Sprite([800, 400], 'tree_large.png', 0.5));
		this.items.add(new Sprite([800, 200], 'tree_large.png', 0.5));
		this.items.add(new Sprite([700, 750], 'tree_large.png', 0.5));
		this.items.add(new Sprite([550, 750], 'tree_large.png', 0.5));
		this.items.add(new Sprite([800, 290], 'tree_large.png', 0.5));
		this.items.add(new Sprite([800, 750], 'tree_large.png', 0.5));
		this.items.add(new Sprite([500, 100], 'tree_large.png', 0.5));
		this.items.add(new Sprite([300, 600], 'tree_large.png', 0.5));
		this.items.add(new Sprite([225, 576], 'tree_large.png', 0.5));
		this.items.add(new Sprite([196, 502], 'tree_large.png', 0.5));
		this.items.add(new Sprite([550, 582], 'tree_large.png', 0.5));
		this.items.add(new Sprite([102, 590], 'tree_large.png', 0.5));
		this.items.add(new Sprite([183, 195], 'tree_large.png', 0.5));
		this.paused = false;

		this.quad = new Quadtree(0, [0, 0, windowWidth, windowHeight], this);
	}

	display() {
		START_BLOCK('drawLevel');
		clear();
		this.player.display();
		this.items.display();
		END_BLOCK('drawLevel');

		START_BLOCK('drawDebugBox');
    if(this.debug) {
      this.player.drawDebugInfo();
			this.items.drawDebugInfo();
    }
		END_BLOCK('drawDebugBox');
	}

	update() {
		START_BLOCK('Quadtree Checks');
		this.quad.clear();
		for(var i = 0; i < this.items.length; i++) {
			this.quad.insert(this.items[i]);
		}

		// var returnObjects = new Group();
		// for(var i = 0; i < this.items.length; i++) {
		// 	returnObjects = new Group();
		// 	returnObjects = this.quad.retrieve(returnObjects, this.items[i]);
		// }

		var possibleCollisions = this.quad.retrieve(new Group(), this.player);
		END_BLOCK('Quadtree Checks');

		START_BLOCK('Collision Checks');
		if(possibleCollisions.colliding(this.player)) {
		}
		END_BLOCK('Collision Checks');

		START_BLOCK('updateLevel');
		this.player.update();
		this.items.update();
		END_BLOCK('updateLevel');
	}

  handleKeyInput(keyCode, pressed) {
    switch(keyCode) {
      case 113: (this.debug === true) ? this.debug = false : this.debug = true; break;
			case 27: (this.paused === true) ? this.paused = false : this.paused = true; break;
    }
  }
}


// if game.debug -> draw rectangle around each sprite, bounding boxes.
