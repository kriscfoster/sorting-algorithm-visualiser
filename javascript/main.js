var arraySizeSlider = document.getElementById("arraySizeSlider");
var array = new Array(arraySizeSlider.value);
var graph = new Graph();
var controlPanel = new ControlPanel(array, graph);
graph.draw(array.values);
