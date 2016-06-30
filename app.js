$(function() {
  var counter = 1;
  var numOfButtons = 10;
  var position1 = 0;
  var position2 = 0;
  var answer = 0;
  var buttonVal = 0;

for (var i = 0; i < numOfButtons; i++) {
  $(".buttons").append('<button value="'+i+'">'+i+'</button>');

}

// $(".buttons").append('<button value="0">0</button>');
// $(".buttons").append('<button value="1">1</button>');
// $(".buttons").append('<button value="2">2</button>');
// $(".buttons").append('<button value="3">3</button>');
// $(".buttons").append('<button value="4">4</button>');
// $(".buttons").append('<button value="5">5</button>');
// $(".buttons").append('<button value="6">6</button>');
// $(".buttons").append('<button value="7">7</button>');
// $(".buttons").append('<button value="8">8</button>');
// $(".buttons").append('<button value="9">9</button>');


$(".buttons").on("click", function(event){
  // $('.display').empty();
  buttonVal = parseInt(event.target.value);
  if (counter == 1){
    position1 = buttonVal;
    counter = 2;
  }
   else {
    position2 = buttonVal;
    answer = position1 + position2;
    $('.display').empty();
    $('.display').append('<p>' + position1 + ' + ' + position2 + ' = ' + answer + '</p>');
    counter = 1;
  }





// console.log(buttonVal);
});











})
