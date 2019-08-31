function Graph() {
  var graphContainer = document.querySelector('.graph-container');

  this.draw = function(arr) {
    graphContainer.innerHTML = '';
    var arrayLength = arr.length;
    var maxVal = findMaxVal(arr);

    for (var i=0; i<arrayLength; i++) {
      var val = arr[i];
      var bar = document.createElement('div');
      bar.style.width = graphContainer.offsetWidth / arrayLength + 'px';
      bar.style.backgroundColor = '#28a745';
      bar.style.height = val / maxVal * 100 + '%';
      bar.style.borderRight = '1px solid white'
      graphContainer.appendChild(bar);
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
