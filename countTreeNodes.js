var countNodes = function (root) {
  if (!root) return 0;

  let nodeCount = 0;
  const queue = [root];

  while (queue.length) {
    let currNode = queue.shift();
    nodeCount++;

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return nodeCount;
};