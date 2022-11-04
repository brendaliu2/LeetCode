var hasCycle = function(head) {
  let current = head;

  while(current) {
    if(current.val === 'cycle detected') {
      return true;
    } else {
      current.val = 'cycle detected';
      current = current.next;
    }
  }
  return false;
};