var hasOneMutation = function (current, neighbor) {
  let mutations = 0;

  for (let i = 0; i < current.length; i++) {
    if (current[i] !== neighbor[i]) {
      mutations++;
    }
  };
  return mutations === 1;
};

var minMutation = function (start, end, bank) {
  if (!bank.length || !bank.includes(end)) return -1;
  if (start === end) return 0;

  let seenGenes = new Set();
  let queue = [[start, 0]];

  seenGenes.add(start);

  while (queue.length) {
    let [currGene, minMutations] = queue.shift();

    if(currGene === end) return minMutations;

    for (let bankGene of bank) {
      let isQualified = hasOneMutation(currGene, bankGene);
      if (isQualified && !seenGenes.has(bankGene)) {
        queue.push([bankGene, minMutations + 1]);
        seenGenes.add(bankGene);
      }
    }
  }

  return -1;
};
