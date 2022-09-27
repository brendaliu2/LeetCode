/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.length = k;
  this.front = null;
  this.rear = null;
  this.queue = [];
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.length === this.queue.length) return false;


  if(!this.front) this.front = value;

  this.rear = value;
  this.queue.push(value);

  return true;


};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(!this.queue.length) return false;

  if(this.queue.length === 1){
      this.queue.shift();
      this.front = null;
      this.rear = null;
  } else {
      this.queue.shift()
      this.front = this.queue[0]
  }

  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(!this.queue.length) return -1;

  return this.queue[0];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(!this.queue.length) return -1;

  return this.queue.at(-1);
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if(!this.queue.length) return true;

  return false;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if(this.length === this.queue.length) return true;

  return false;
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/