let color = document.getElementById('colorPicker');// Select color input
let sizePicker = document.getElementById('sizePicker');// Select size input
//let table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(evt){
    evt.preventDefault(); //prevent ht and wdth from defaulting to orig. size
    let height = document.getElementById('inputHeight').value; //get value of height from user
    let width = document.getElementById('inputWidth').value; //get value of w from user
    makeGrid(height, width)
})


function makeGrid(n, m) {
    $('tr').remove(); // resets the grid when submit is selected
   //add cell for each row using nested for loop
  for(var i = 0; i < n; i++) {
    $('#pixelCanvas').append('<tr id=table'+ i + '></tr>'); //add rows to your table
    for(var j = 0; j < m; j++) {
      $('#table' + i).append('<td></td>'); //use i from the first example to build off ea. row
    }
}
  
  $('td').click(function coloring() //to color the cells
   {
    color = $('#colorPicker').val(); //get value from color picker .val cannot be used w/o jquery
    if($(this).attr('style')) //check to see if cell already has this style
      {
        $(this).removeAttr('style'); //remove the style if it was detected
      }
    else
      $(this).attr('style','background-color:'+color); //if the style wasn't detected, add the style (color in)
  })
  
}
//nested for loop to have columns come out of the row
    
    