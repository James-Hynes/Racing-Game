class Car extends Sprite {

	constructor(pos, img, scale) {
		super(pos, img, scale);
		this.speed = createVector(0, 0);
		this.accel = 1;
		this.rotation = 0;
		this.rotationSpeed = 2;
	}

	update() {
		this.speed.limit(6);
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
	}

	handleKeyInput() {
		(keyIsDown(SHIFT)) ? this.rotationSpeed = 3 : this.rotationSpeed = 2;
		if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) this.rotation += this.rotationSpeed;
		if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) this.rotation -= this.rotationSpeed;

		if(keyIsDown(UP_ARROW) || keyIsDown(87)) {
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

		if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
			if(Math.abs(this.speed.x) < 0.04) this.speed.x = 0;
			if(Math.abs(this.speed.y) < 0.04) this.speed.y = 0;
			this.speed.x = lerp(this.speed.x, 0, 0.08);
			this.speed.y = lerp(this.speed.y, 0, 0.08);
		}
	}
}
