import Node from "./node.js";

export default function LinkedList() {
  let headNode = new Node();

  const append = (value) => {
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  };

  const prepend = (value) => {
    const prevNode = headNode;
    headNode.nextNode = new Node(value, prevNode.nextNode);
  };

  const size = () => {
    let c = 0;
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      c++;
    }
    return c;
  };

  const head = () => {
    return `( ${headNode.nextNode.value} )`;
  };

  const tail = () => {
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return `( ${currentNode.value} )`;
  };

  const at = (index) => {
    let currentNode = headNode.nextNode;
    let i = 0;
    while (i !== index) {
      if (currentNode.nextNode === null) {
        return "bruh";
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode.value;
  };

  const pop = () => {
    let currentNode = headNode;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  };

  const contains = (value) => {
    let currentNode = headNode;
    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let currentNode = headNode;
    let index = 0;
    while (currentNode.value !== value) {
      if (currentNode.nextNode === null) {
        return "bruh";
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return index;
  };

  const toString = () => {
    let currentNode = headNode.nextNode;
    let listString = `( ${currentNode.value} ) -> `;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      listString += `( ${currentNode.value} ) -> `;
    }
    listString += `${currentNode.nextNode}`;
    return listString;
  };

  const insertAt = (value, index) => {
    let currentNode = headNode;
    let i = 0;
    while (i < index) {
      if (currentNode.nextNode === null) {
        return "bruh";
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    const newNode = new Node(value, currentNode.nextNode);
    currentNode.nextNode = newNode;
  };

  const removeAt = (index) => {
    let currentNode = headNode;
    let i = 0;
    while (i < index) {
      if (currentNode.nextNode === null) {
        return "bruh";
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    currentNode.nextNode.value = null;
    currentNode.nextNode = currentNode.nextNode.nextNode;
  };

  return {
    append,
    prepend,
    toString,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
  };
}
