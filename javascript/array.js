function Array(size) {
  this.values = [];
  var arr = [];
  for (var i=0; i<size; i++) {
    arr.push(Math.round(Math.random() * 100));
  }

  this.values = arr;
}
