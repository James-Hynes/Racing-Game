class Quadtree {
  constructor(pLevel, pBounds, game) {
    this.MAX_OBJECTS = 5;
    this.MAX_LEVELS = 5;

    this.level = pLevel;
    this.objects = game.items;

    this.bounds = pBounds;
    this.nodes = [];
  }

  clear() {
    this.objects = new Group();
    for(var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].clear();
    }
  }

  split() {
    var w2 = this.bounds[2] / 2,
        h2 = this.bounds[3] / 2,
        x = this.bounds[0],
        y = this.bounds[1];

    this.nodes[0] = new Quadtree(this.level + 1, [x, y, w2, h2], game);
    this.nodes[1] = new Quadtree(this.level + 1, [x + w2, y, w2, h2], game);
    this.nodes[2] = new Quadtree(this.level + 1, [x, y + h2, w2, h2], game);
    this.nodes[3] = new Quadtree(this.level + 1, [x + w2, y + h2, w2, h2], game);
  }

  getIndex(spr) {
    var index = -1;

    var verticalMidpoint = this.bounds[0] + (this.bounds[2] / 2);
    var horizontalMidpoint = this.bounds[1] + (this.bounds[3] / 2);
    var topQuadrant = ((spr.pos.y - (spr.colliderBox / 2)) < horizontalMidpoint && spr.pos.y + (spr.colliderBox / 2) < horizontalMidpoint);
    var bottomQuadrant = ((spr.pos.y - (spr.colliderBox / 2)) > horizontalMidpoint);

    if(spr.pos.x - (spr.colliderBox / 2) < verticalMidpoint && spr.pos.x + (spr.colliderBox / 2) < verticalMidpoint) {
      if(topQuadrant) {
        index = 1;
      } else if(bottomQuadrant) {
        index = 2;
      }
    } else if(spr.pos.x - (spr.colliderBox / 2) > verticalMidpoint) {
      if(topQuadrant) {
        index = 0;
      } else if(bottomQuadrant) {
        index = 3;
      }
    }
    return index;
  }

  insert(spr) {
    if(this.nodes[0] !== undefined) {
      var index = this.getIndex(spr);
      if(index !== -1) {
        this.nodes[index].insert(spr);
        return false;
      }
    }
    this.objects.add(spr);
    if(this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS) {
      if(this.nodes[0] === undefined) {
        this.split();
      }
      var i = 0;
      while(i < this.objects.length) {
        var index = this.getIndex(this.objects[i]);
        if(index !== -1) {
          this.nodes[index].insert(this.objects.remove(i));
        } else {
          i++;
        }
      }
    }
  }

  retrieve(returnObjects, spr) {
    var index = this.getIndex(spr);
    if(index !== -1 && this.nodes[0] !== undefined) {
      return this.objects.concat(this.nodes[index].retrieve(returnObjects, spr));
    }
    returnObjects = returnObjects.concat(this.objects);
    return returnObjects;
  }
}

// class Quadtree(x, y, w, h) {
//   this.thresh = 4;
//   this.segs = [];
//   this.quads = [];
//
//   this.rect = [0, 0, windowWidth, windowHeight];
//
//   addSegments(segs) {
//     for(var i = 0; i < segs.length; i++) {
//
//     }
//   }
// }
