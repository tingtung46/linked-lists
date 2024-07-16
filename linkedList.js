import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
    this.listTail = this.listHead;
    this.length = 0;
  }

  prepend(value) {
    let temp = null;
    if (this.listHead !== null) temp = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = temp;
    this.length += 1;

    if (this.listTail !== null) return;
    this.listTail = this.listHead;
  }

  append(value) {
    const temp = new Node(value);

    if (this.head === null) {
      this.prepend(value);
    } else {
      this.listTail.nextNode = temp;
      this.listTail = temp;
    }

    this.length += 1;
  }

  size() {
    let temp = this.listHead;
    let total = 0;

    while (temp !== null) {
      total += 1;
      temp = temp.nextNode;
    }

    return total;
  }

  head() {
    return this.listHead;
  }

  tail() {
    return this.listTail;
  }

  at(index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp === null) return "There is no item in this index";
    }

    return temp;
  }

  pop() {
    if (this.listHead === null) return null;

    let cur = this.listHead;
    let prev = this.listHead;
    while (cur.nextNode) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
    this.listTail = prev;
    this.length -= 1;

    if (this.length === 0) {
      this.listHead = null;
      this.listTail = null;
    }

    return cur;
  }

  contains(value) {
    let temp = this.listHead;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    let temp = this.listHead;
    let index = 0;

    while (temp !== null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index += 1;
    }

    return null;
  }

  toString() {
    let temp = this.listHead;
    let listStr = "";
    while (temp !== null) {
      listStr += `${temp.value} -> `;
      temp = temp.nextNode;
    }

    return (listStr += "null");
  }

  insertAt(value, index) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let cur = this.listHead;
      let prev = this.listHead;

      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;

        //Stop current loop and jump to the next statement
        if (cur === null) break;
      }

      let temp = new Node(value);
      prev.nextNode = temp;
      temp.nextNode = cur;
      this.length += 1;
    }
  }

  removeAt(index) {
    if (this.listHead === null) return null;

    let cur = this.listHead;
    let prev = this.listHead;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur === null) return;
    }

    prev.nextNode = cur.nextNode;
    this.length -= 1;
  }
}
