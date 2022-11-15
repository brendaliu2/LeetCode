var maxDepth = function(root) {
  if (!root) return 0;

  const queue = [[root, 1]];
  let maxDepth = 1;

  while (queue.length) {
    let [node, depth] = queue.shift();
    maxDepth = Math.max(depth, maxDepth)

    if(node.left) queue.push([node.left, depth + 1]);
    if(node.right) queue.push([node.right, depth + 1]);

  }

  return maxDepth;

};