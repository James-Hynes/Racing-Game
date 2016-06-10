class Group extends Array {
	add(s) {
		if(s instanceof Sprite) this.push(s);
	}

	update() {
		this.forEach(s => s.update() );
	}

	display() {
		this.forEach(s => s.display() );
	}

	drawDebugInfo() {
		this.forEach(s => s.drawDebugInfo() );
	}

	colliding(i) {
		return this.some((s) => {
			return i.checkBoxHit(s);
		});
	}
}
