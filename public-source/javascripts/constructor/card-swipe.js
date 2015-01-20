
cardEl.on("panright", function(e) {
    swapCard(ticker, "right")
});

cardEl.on("panleft", function(e) {
    swapCard(ticker, "left");
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

    if(direction == "left" && ticker < (cards.length - 1)){
      nthChild = ":nth-of-type(" + (cards.length - position) + ")";
      selectedCard = $(".icon-card" + nthChild)
      selectedCard.addClass("swiped");
      ticker = ticker + 1;
    }else if(direction == "right" && ticker != 0){
      nthChild = ":nth-of-type(" + (cards.length - position + 1) + ")";
      selectedCard = $(".icon-card" + nthChild);
      selectedCard.removeClass("swiped");
      ticker = ticker - 1;
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