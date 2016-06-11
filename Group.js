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

	remove(i) {
		var item = this[i];
		this.splice(i, 1);
		return item;
	}

	drawDebugInfo() {
		this.forEach(s => s.drawDebugInfo() );
	}

	colliding(i) {
		return this.some((s) => {
			if(i.checkBoxHit(s)) {
				return true;
			}
		});
	}
}
