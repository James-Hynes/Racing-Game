class Sprite {

	constructor(pos, img, scale) {
		this.handleParams(pos, img, scale);
	}

	handleParams(pos, img, scale) {
		this.pos = createVector(pos[0], pos[1]);

		this.img = loadImage('assets/'+img);

		this.scale = scale;
	}

	update() {
	}

	display() {
    if(this.colliderBox === undefined && this.img.height !== 1) { this.colliderBox = (this.img.height > this.img.width) ? this.img.height * this.scale : this.img.width * this.scale};
    push();
		imageMode(CENTER);
		translate(this.pos.x, this.pos.y);
		rotate(radians(this.rotation));
		image(this.img, 0, 0, this.img.width * this.scale, this.img.height * this.scale);
    pop();
	}

  drawDebugInfo() {
    // push();
    noFill();
    stroke(0, 255, 0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.colliderBox, this.colliderBox);
    // pop();
  }

	checkBoxHit(s) {
		return !(
			( ( this.pos.y - (this.colliderBox / 2)) > (s.pos.y + (s.colliderBox / 2)) ) ||
			( (this.pos.y + (this.colliderBox / 2)) < (s.pos.y - (s.colliderBox / 2)) ) ||
			( (this.pos.x - (this.colliderBox / 2)) > s.pos.x + (s.colliderBox / 2)) ||
			( (this.pos.x + (this.colliderBox / 2)) < (s.pos.x - (s.colliderBox / 2)) )
			);
	}

	checkPixelHit(s) {
		this.img.loadPixels();
		s.img.loadPixels();

		var x = Math.round(this.pos.x - (this.colliderBox / 2)),
				y = Math.round(this.pos.y - (this.colliderBox / 2)),
				x2 = Math.round(s.pos.x - (s.colliderBox / 2)),
				y2 = Math.round(s.pos.y - (s.colliderBox / 2));


		var xMin = Math.max(x, x2);
		var yMin = Math.max(y, y2);
		var xMax = Math.min(x + this.colliderBox, x2 + s.colliderBox);
		var yMax = Math.min(y + this.colliderBox, y2 + s.colliderBox);

		var xDiff = xMax - xMin,
				yDiff = yMax - yMin;

		for(var pixelX = xMin; pixelX < xMax; pixelX++) {
			for(var pixelY = yMin; pixelY < yMax; pixelY++) {
				var pixel1 = this.img.get((pixelX - x), (pixelY - y));
				var pixel2 = s.img.get((pixelX - x2), (pixelY - y2));
				// var pixel2 = ( ((pixelX - x2) + (pixelY - y2)) * s.colliderBox) * 4 + 3;
				// console.log(this.img.pixels[pixel1], s.img.pixels[pixel2]);
				console.log(pixel1, pixel2);
				if(alpha(pixel1) !== 0 && alpha(pixel2) !== 0) {
					return true;
				}
			}
		}
		return false;
	}

	globalPosToSprite(pos) {
		return createVector((this.pos.x - (this.colliderBox / 2) - pos.x, pos.y - (this.pos.y - (this.colliderBox / 2))));
	}
}
