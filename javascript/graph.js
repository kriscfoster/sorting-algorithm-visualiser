function Graph() {
  const graphContainer = document.querySelector('.graph-container');
  this.graphContainer = graphContainer;

  this.draw = function(arr, redIndexes) {
    while (graphContainer.firstChild) {
      graphContainer.removeChild(graphContainer.firstChild);
    }

    var arrayLength = arr.length;
    var maxVal = findMaxVal(arr);

    for (var i=0; i<arrayLength; i++) {
      var val = arr[i];
      var bar = document.createElement('div');
      bar.style.width = graphContainer.offsetWidth / arrayLength + 'px';
      bar.style.height = val / maxVal * 100 + '%';
      bar.style.border = '2px solid white'
      graphContainer.appendChild(bar);
    }

    this.recolour(arr);
  }

  this.recolour = function(array) {
    var finished = false;
    for (var i=array.length - 1; i>=0; i--) {
      var currentNode = graphContainer.childNodes[i];
      if (!finished && isInCorrectPlace(i, array)) {
        currentNode.style.backgroundColor = 'purple';
      } else {
        finished = true;
        currentNode.style.backgroundColor = '#28a745';
      }
    }
  }

  function isInCorrectPlace(i, arr) {
    var val = arr[i];
    var arrayLength = arr.length;
    var beforeArray = arr.slice(0, i);
    var afterArray = arr.slice(i+1, arrayLength);

    if ((val >= findMaxVal(beforeArray) || !beforeArray.length) &&
    (val <= findMinVal(afterArray) || !afterArray.length)) {
      return true;
    }
  }

  function findMaxVal(arr) {
    var currentMaxVal = arr[0];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] > currentMaxVal) {
        currentMaxVal = arr[i];
      }
    }

    return currentMaxVal;
  }

  function findMinVal(arr) {
    var currentMinVal = arr[0];
    for (var i=0; i<arr.length; i++) {
      if (arr[i] < currentMinVal) {
        currentMinVal = arr[i];
      }
    }

    return currentMinVal;
  }
}
