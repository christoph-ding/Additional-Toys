// Linked List
var LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function (val) {
  var newNode = this.makeNode(val);

  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode
  }
};

LinkedList.prototype.makeNode = function(val){
  var newNode = {
    value: val,
    next: null    
  }
  return newNode;
};

// intersection of two lists
var intersectionLinkLists = function (listOne, listTwo) {
  // make a hash of the first list
  var listOneHash = {};
  var currentNode = listOne.head

  while(currentNode.next) {
    if !(listOneHash[currentNode.value]) {
      listOneHash[currentNode] = true;
    }
  }

  // iterate through second list
  var currentNode = listTwo.head

  while(currentNode.next) {
    if (listOneHash[currentNode.value]) {
      return currentNode.value;
    }
  }
}

// Test

// make two linked lists
var listOne = new LinkedList();
var listTwo = new LinkedList();

console.log(listOne);
console.log(listTwo);

