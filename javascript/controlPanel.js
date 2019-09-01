function ControlPanel(array, graph) {
  this.array = array;
  this.graph = graph;
  this.bubbleSort = new BubbleSort(array.values, graph);
  this.animationSpeed = 250;

  var arraySizeSlider = document.getElementById("arraySizeSlider");
  var animationSpeedSlider = document.getElementById("animationSpeedSlider");
  var sortButton = document.getElementById("sortButton");
  var newArrayButton = document.getElementById("newArrayButton");
  var stopButton = document.getElementById("stopButton");
  var arraySizeOutput = document.getElementById("arraySizeOutput");
  arraySizeOutput.innerText = arraySizeSlider.value;

  arraySizeSlider.oninput = (function(evt) {
    var arrayLength = arraySizeSlider.value;
    arraySizeOutput.innerText = arrayLength;
    this.array = new Array(arrayLength);
    graph.draw(this.array.values);
    this.bubbleSort = new BubbleSort(this.array.values, graph);
    sortButton.disabled = false;
  }).bind(this);

  newArrayButton.onclick = (function(evt) {
    var arrayLength = arraySizeSlider.value;
    this.array = new Array(arrayLength);
    graph.draw(this.array.values);
    this.bubbleSort = new BubbleSort(this.array.values, graph);
    sortButton.disabled = false;
  }).bind(this);

  animationSpeedSlider.oninput = (function(evt) {
    this.animationSpeed = animationSpeedSlider.value;
  }).bind(this);

  var intervalId;

  sortButton.onclick = (function(evt) {
    sortButton.style.display = 'none';
    stopButton.style.display = 'block';
    var sorted = this.array.values.sort((a, b) => a - b);
    intervalId = setInterval(() => {
      var stepPerformed = this.bubbleSort.performStep();
      graph.recolour(stepPerformed);

      // TODO Compare arrays in a nicer way
      if (JSON.stringify(sorted) == JSON.stringify(stepPerformed)) {
        clearInterval(intervalId);
        graph.draw(this.array.values);
        sortButton.disabled = true;
        sortButton.style.display = 'block';
        stopButton.style.display = 'none';
      }
    }, 500 - this.animationSpeed * 2);
  }).bind(this);

  stopButton.onclick = (function(evt) {
    clearInterval(intervalId);
    sortButton.style.display = 'block';
    stopButton.style.display = 'none';
  })
}
