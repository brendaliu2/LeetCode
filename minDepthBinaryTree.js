var minDepth = function(root) {
    if (!root) return 0;

    const queue = [[root, 1]];
    let minDepth = 1;

    while(queue.length) {
      let [node, depth] = queue.shift();

      if(!node.left && !node.right) return depth;

      if(node.left) queue.push([node.left, depth + 1]);
      if(node.right) queue.push([node.right, depth + 1]);
    }

    return minDepth;
};