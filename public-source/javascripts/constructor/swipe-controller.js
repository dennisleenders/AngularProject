var wrapperElement = $(".noun-wrapper");
var swipeElement = document.getElementById('homescreen-swipe');

var hammertime = new Hammer(swipeElement);

hammertime.on("panleft panright", function(e) {
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
