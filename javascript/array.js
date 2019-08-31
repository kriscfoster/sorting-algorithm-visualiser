function Array(size) {
  this.values = [];

  var arr = [];
  for (var i=0; i<size; i++) {
    var val = Math.round(Math.random() * 100);
    arr.push(val);
  }

  this.values = arr;

  this.sort = function() {
    this.values = this.values.sort((a, b) => a - b);
  }

  this.bubbleSort = function() {

  }

  this.quickSort = function() {

  }

  this.mergeSort = function() {

  }
}
