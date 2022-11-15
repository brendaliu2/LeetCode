var levelOrder = function (root) {
  if (!root) return [];

  const traversedNodes = new Map();
  const queue = [[root, 1]];

  while (queue.length) {
    let [node, level] = queue.shift();

    if (traversedNodes.has(level)) {
      const levelNodes = traversedNodes.get(level);
      levelNodes.push(node.val);
      traversedNodes.set(level, levelNodes);
    } else {
      traversedNodes.set(level, [node.val]);
    }

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  return Array.from(traversedNodes.values());
};