import LinkedList from "./linkedList.js";

const linkedList = new LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
linkedList.append("test4");
linkedList.pop();
console.log(linkedList.tail());
console.log(linkedList.size());
console.log(linkedList.contains("test2"));
console.log(linkedList.find("test4"));
console.log(linkedList.toString());
linkedList.insertAt("test5", 1);
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());
