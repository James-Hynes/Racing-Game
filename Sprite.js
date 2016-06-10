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
    push();
    noFill();
    stroke(0, 255, 0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.colliderBox, this.colliderBox);
    pop();
  }

	checkBoxHit(s) {
		return !(
			( ( this.pos.y - (this.colliderBox / 2)) > (s.pos.y + (s.colliderBox / 2)) ) ||
			( (this.pos.y + (this.colliderBox / 2)) < (s.pos.y - (s.colliderBox / 2)) ) ||
			( (this.pos.x - (this.colliderBox / 2)) > s.pos.x + (s.colliderBox / 2)) ||
			( (this.pos.x + (this.colliderBox / 2)) < (s.pos.x - (s.colliderBox / 2)) )
			);
	}
}
