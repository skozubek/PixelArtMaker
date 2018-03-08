$(function() {
  // Select color input
  var colorPicked = $('#colorPicker');
  // Select size input
  var gridHeight = $('#input_height');
  var gridWidth = $('#input_width');
  // Select Submit button
  var submitBtn = $('input[type="submit"]');
  // Select design canvas
  var pixelCanvas = $('#pixel_canvas');
  // Select Tips section
  var tips = $('#tips');
  //drawing mode set to true if mouse left button pressed down
  // and false if up
  var drawingMode = false;
  //mouse down event for the document
  //set drawingMode
  $(document).mousedown(function() {
    drawingMode = true;
  });
  //mouse up event for the document
  //set drawingMode
  $(document).mouseup(function() {
    drawingMode = false;
  });
  //click event delegation for the table cells
  $('#pixel_canvas').on('click', 'td', function() {
   $(this).css('background-color', colorPicked.val());
  });
  //double click event delegation for the table cells
  //reset color to white
  $('#pixel_canvas').on('dblclick', 'td', function() {
   $(this).css('background-color', 'white');
  });
  //mouse down event delegation for the table cells
  //set drawingMode
  $('#pixel_canvas').on('mousedown', 'td', function(event) {
    drawingMode = true;
    $(this).css('background-color', colorPicked.val());
  });
  //mouse enter event delegation for the table cells (drawing)
  //set color if in drawing mode (mouse down)
  $('#pixel_canvas').on('mouseenter', 'td', function() {
   if(drawingMode){
     $(this).css('background-color', colorPicked.val());
   }
  });
  //Reset grid
  function resetGrid() {
    //remove tbody if exists
    if ($('tbody').length) {
      $('tbody').remove();
    }
  }
  // When size is submitted by the user, call makeGrid()
  function makeGrid(height,width) {
    $('<tbody></tbody>').appendTo(pixelCanvas);
    //create rows loop
    for(var i = 0; i < height; i++){
      var canvasRow = $('<tr></tr>').appendTo(pixelCanvas);
      //create columns loop
      for(var j = 0; j < width; j++){
        var canvasColumn = $('<td></td>').appendTo(canvasRow);
      }
    }
  }
  // Show tips below canvas
  function showTips() {
    tips.css('display','inline-block');
  }
  const sizePicker = document.querySelector('#sizePicker');
  sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    resetGrid();
    makeGrid(gridHeight.val(), gridWidth.val());
    showTips();
  });
});
