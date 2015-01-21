// checking our own Hammer js gesture actions
cardEl.on("panright", function(e) {
    swapCard(cardPosition, "right")
});

cardEl.on("panleft", function(e) {
    swapCard(cardPosition, "left");
});

cardEl.on("doubletap tap", function(e) {  
    console.log(e.type);
});

// funtion that swaps the cards around. 
// It first checks if the card swap animation is still in progress &&
// if there are even cards in the ng-repeat (cards.length will be updated)
// since ng-repeat will dynamicly create more cards when we search.
function swapCard(position, direction) {
  var cards = $(".icon-card"); 
  if(isSwiped == false && cards.length != 0){
    var selectedCard;
    var nthChild;

    if(direction == "left" && cardPosition < (cards.length - 1)){
      nthChild = ":nth-of-type(" + (cards.length - position) + ")";
      selectedCard = $(".icon-card" + nthChild)
      selectedCard.addClass("swiped");

      cardPosition = cardPosition + 1;
      sliderDotProgression(direction)

    }else if(direction == "right" && cardPosition != 0){
      nthChild = ":nth-of-type(" + (cards.length - position + 1) + ")";
      selectedCard = $(".icon-card" + nthChild);
      selectedCard.removeClass("swiped");

      cardPosition = cardPosition - 1;
      sliderDotProgression(direction)

    }
    swapCardTimeout();
  }
}

function swapCardTimeout() {
  isSwiped = true;
  setTimeout(function() {
    isSwiped = false;
  }, 400);
}

function sliderDotProgression(direction) {
  // This special chain will find the current li .active, remove the class .active and search for
  // the next or previous li in the same parent. And add the new .active class to it
  if(direction == "left"){
    sliderDots.find('li.active').removeClass("active").next().addClass("active");
  }else {
    sliderDots.find('li.active').removeClass("active").prev().addClass("active");
  }
}