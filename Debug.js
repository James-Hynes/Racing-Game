var blocks = {};

function START_BLOCK(name) {
  blocks[name] = [performance.now()];
}

function END_BLOCK(name) {
  blocks[name].push(performance.now() - blocks[name][0]);
}



// write time debug code + thread draw loop
