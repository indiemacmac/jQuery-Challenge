var redCount = 0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;



$('.color-button').on('click', 'color-button.data-color', function() {
  case 'red':
      redCount++;
      $('.redTotal').append('<p>' + redCount + '</p>');
      $('.container').append('.color-cube.red')

    break;
})

// I feel like I'm almost there. I don't know what I keep missing.
// here's what I've got on the table:
// $('.color-button').on('click', function(){
//
// }
// $(.'color').append('<p>' + redCount + '</p>')
// $(".container").append('color-cube')
// and all the other colors written out similarly to red up on top. Also a lot of red arrows connecting different things.
// and I know I need to put attr('.data-color', 'red') somewhere in here but I cant figure out where.
