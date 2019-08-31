function Graph() {
  this.graphContainer = document.querySelector('.graph-container');

  this.draw = function(arr, redIndexes) {
    while (this.graphContainer.firstChild) {
      this.graphContainer.removeChild(this.graphContainer.firstChild);
    }

    var arrayLength = arr.length;
    var maxVal = findMaxVal(arr);

    for (var i=0; i<arrayLength; i++) {
      var val = arr[i];
      var bar = document.createElement('div');
      bar.style.width = this.graphContainer.offsetWidth / arrayLength + 'px';

      if (redIndexes && redIndexes.includes(i)) {
        bar.style.backgroundColor = 'red';
      } else {
        bar.style.backgroundColor = '#28a745';
      }

      bar.style.height = val / maxVal * 100 + '%';
      bar.style.borderRight = '1px solid white'
      this.graphContainer.appendChild(bar);
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
}
