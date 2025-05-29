import LinkedList from "./linkedlist.js";
const list = new LinkedList();

// initial test
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

// prepend
list.prepend("wew");
console.log(list.toString());

// size
console.log(list.size());

// head
console.log(list.head());
// tail
console.log(list.tail());

// at
console.log(list.at(3));
console.log(list.at(69));

// pop
list.pop();
console.log(list.toString());

// contains
console.log(list.contains("bruh"));
console.log(list.contains("dog"));

// find
console.log(list.find("hamster"));
console.log(list.find("dhamster"));

// insertAt
list.insertAt("kengkoy", 3);
console.log(list.toString());

//removeAt
list.removeAt(3);
console.log(list.toString());
