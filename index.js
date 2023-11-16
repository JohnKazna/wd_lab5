function swapContent() {
    var block3 = document.getElementById('block3');
    var block6 = document.getElementById('block6');
  
    var content3 = block3.innerHTML;
    var content6 = block6.innerHTML;
  
    block3.innerHTML = content6;
    block6.innerHTML = content3;
  }
  
  window.onload = function() {
    swapContent();
  };
  
  function calculateParallelogramArea(width, height) {
    var area = width * height;
    return area;
  }

  const width = document.getElementById("widht");
  const height = document.getElementById("height");


  const getArea = () => {
    const area = calculateParallelogramArea(width.value, height.value);
    
  }