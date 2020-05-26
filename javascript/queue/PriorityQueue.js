/**
 * 优先队列：
 * 传入一个数组作为元素，包含一个优先级属性，做后续元素的对比
 */
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  /**
   * 从队尾添加元素 - 按优先级进行排序
   * @param {object，优先级} val
   */
  enqueue(val) {
    const arr = this.collection
    const len = arr.length
    // 为空则直接插入
    if (len === 0) {
      arr.push(val)
      return
    }
    // 不为空则按照优先级插入
    for (let i=0 ; i<len ; i++){
      if (val[1] > arr[i][1]) {
        arr.splice(i, 0, val)
        return
      }
    }
    // 优先级最低时执行
    arr.push(val);
  }

  // 从队首删除元素
  dequeue() {
    this.collection.shift();
  }

  // 获得队首的元素
  getFront() {
    return this.collection[0];
  }

  // 返回队列元素个数
  getSize() {
    return this.collection.length;
  }
}

export default PriorityQueue;