function ControlPanel(array, graph) {
  var slider = document.getElementById("arraySizeSlider");
  var sortButton = document.getElementById("sortButton");
  var arraySizeOutput = document.getElementById("arraySizeOutput");
  arraySizeOutput.innerText = slider.value;

  slider.oninput = function() {
    var arrayLength = this.value;
    arraySizeOutput.innerText = arrayLength;
    array = new Array(arrayLength);
    graph.draw(array.values);
  }

  sortButton.onclick = function() {
    array.sort();
    graph.draw(array.values);
  }
}
