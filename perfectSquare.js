var numSquares = function(n) {

  const squares = new Set();
  for (let i = 1; i * i <= n; ++i) squares.add(i * i);
  let queue = new Set();
  queue.add(n);

  let level = 0;
  while (queue.size) {
    level += 1;
    let nextQueue = new Set();

    for (let remainder of queue) {
      for (let square of squares) {
        if (remainder === square)
          return level;
        else if (remainder < square)
          break;
        else
          nextQueue.add(remainder - square);
      }
    }
    queue = nextQueue;
  }
  return level;
};