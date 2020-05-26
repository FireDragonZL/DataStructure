// 定义链表节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * 单向链表 - 头节点不是虚拟头节点
 * 1. 链表节点 = 本节点数据 + 指向下一节点的指针
 * 2. 遍历链表
 * 3. 删除中间节点
 */
class SingleLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  // 返回链表中节点的个数
  getSize() {
    return this.size;
  }

  // 判断链表是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 向链表尾添加元素
  add(element) {
    const node = new Node(element);
    // 链表为空
    let currentNode = this.head;
    if (currentNode === null) {
      this.head = node;
      this.size++;
      return;
    }
    // 链表不为空 - 遍历至最后一个节点
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size++;
  }

  // 删除头节点
  removeFirst () {
    const currentNode = this.head
    this.head = currentNode.next
    this.size --
    return currentNode.element
  }

  // 删除尾节点
  removeLast () {
   return this.removeAt(this.size-1)
  }

  /**
   * 删除链表中间位置索引值为index的节点
   * @param {} index
   */
  removeAt(index) {
    if (index<0 || index>=this.size) {
      return new Error("索引值超出界限！")
    }
    // 删除头节点
    if (index === 0) {
      return this.removeFirst()
    }
    // 删除非头节点
    let preNode
    let currentNode = this.head
    for (let i=0 ; i<index ; i++) {
      preNode = currentNode
      currentNode = currentNode.next
    }
    preNode.next = null
    preNode.next = currentNode.next
    this.size --
    return currentNode.element
  }
}

export default SingleLinkedList