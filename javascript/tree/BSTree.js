// 二叉树节点类
class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

/**
 * JS实现二分搜索树
 * 1. 左子节点小于父节点
 * 2. 右子节点大于父节点
 * 3. 最小值出现在最左侧叶子节点
 * 4. 最大值出现在最右侧叶子节点
 */
class BSTree {
  constructor () {
    this.root = null
    this.size = 0
  }

  // 添加节点
  add (data) {
    let node = this.root
    // 根节点不存在则直接插入
    if (node === null) {
      this.root = new Node(data)
      this.size++;
      return
    }
    this.searchTree(node, data);
  }

  /**
   * 内部私有工具方法，注意，node对象不能为null，否则无法生成tree结构
   * @param {*} node 节点对象
   * @param {*} data 节点数据
   */
  searchTree (node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
        this.size++
        return;
      }
      return this.searchTree(node.left, data);
    }

    if (node.right === null) {
      node.right = new Node(data);
      this.size++;
      return;
    }
    return this.searchTree(node.right, data);
  }

  // 返回tree的节点数
  getSize () {
    return this.size
  }

  // 判断节点是否为空
  isEmpty () {
    return this.size === 0
  }
}

export default BSTree