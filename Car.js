class Car extends Sprite {

	constructor(pos, img, scale) {
		super(pos, img, scale);
		this.speed = createVector(0, 0);
		this.accel = 1;
		this.rotation = 0;
	}

	update() {
		this.speed.limit(6);
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
	}

	handleKeyInput() {
		if(keyIsDown(RIGHT_ARROW)) this.rotation += 2;
		if(keyIsDown(LEFT_ARROW)) this.rotation -= 2;

		if(keyIsDown(UP_ARROW)) {
			var radianRotation = (this.rotation + 90) * (Math.PI / 180);
			this.speed.x -= Math.cos(radianRotation) / 10;
			this.speed.y -= Math.sin(radianRotation) / 10;
		} else {
			if(Math.abs(this.speed.x) < 0.04) this.speed.x = 0;
			if(Math.abs(this.speed.y) < 0.04) this.speed.y = 0;
			// let anglediff = map(90 - this.rotation, -90, 0, 0, 2);
			this.speed.x = lerp(this.speed.x, 0, 0.02 ); //* anglediff);
			this.speed.y = lerp(this.speed.y, 0, 0.02 ); // * anglediff);
		}

		if(keyIsDown(DOWN_ARROW)) {
			if(Math.abs(this.speed.x) < 0.04) this.speed.x = 0;
			if(Math.abs(this.speed.y) < 0.04) this.speed.y = 0;
			this.speed.x = lerp(this.speed.x, 0, 0.08);
			this.speed.y = lerp(this.speed.y, 0, 0.08);
		}
	}
}
