function BubbleSort(array, graph) {
  this.i = 0;
  this.origValues = array.slice();
  this.length = array.length - 1;
  this.graph = graph;
  this.swapped = false;

  var graphContainer = graph.graphContainer;

  this.performStep = function() {
    var origValues = this.origValues;
    var i = this.i++;
    if (origValues[i] > origValues[i + 1]) {
      var temp = origValues[i];
      origValues[i] = origValues[i+1]
      origValues[i+1] = temp;
      this.swapped = true;
      var movingLeft = graphContainer.childNodes[i+1];
      var movingRight = graphContainer.childNodes[i];
      graphContainer.insertBefore(movingLeft, movingRight);
    }

    if (this.i >= this.length) {
      this.swapped = false;
      this.i = 0;
    }

    return origValues;
  }
}
