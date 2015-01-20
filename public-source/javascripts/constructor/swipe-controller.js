var wrapperElement = $(".noun-wrapper");
var swipeElement = document.getElementById('homescreen-swipe');

var modeSelection = new Hammer(swipeElement);

modeSelection.on("panleft panright", function(e) {
    swipeMove(e.type);
});


function swipeMove(direction){
  if(direction == 'panright'){
    wrapperElement.removeClass('sentence words')
    wrapperElement.addClass('sentence')
  }else {
    wrapperElement.removeClass('sentence words')
    wrapperElement.addClass('words')
  }
}
