function ControlPanel(array, graph) {
  this.array = array;
  this.graph = graph;
  this.bubbleSort = new BubbleSort(array.values, graph);

  var slider = document.getElementById("arraySizeSlider");
  var sortButton = document.getElementById("sortButton");
  var arraySizeOutput = document.getElementById("arraySizeOutput");
  arraySizeOutput.innerText = slider.value;

  slider.oninput = (function(evt) {
    var arrayLength = slider.value;
    arraySizeOutput.innerText = arrayLength;
    this.array = new Array(arrayLength);
    graph.draw(this.array.values);
    this.bubbleSort = new BubbleSort(this.array.values, graph);
  }).bind(this);

  sortButton.onclick = (function(evt) {
    var sorted = this.array.values.sort((a, b) => a - b);
    var intervalId = setInterval(() => {
      var stepPerformed = this.bubbleSort.performStep();
      // TODO Compare arrays in a nicer way
      if (JSON.stringify(sorted) == JSON.stringify(stepPerformed)) {
        clearInterval(intervalId);
        graph.draw(this.array.values);
      }
    }, 100);
  }).bind(this);
}
