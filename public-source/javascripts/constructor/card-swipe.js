
var cardSwipeEl = document.getElementById('card-swipe');
var cardEl = new Hammer(cardSwipeEl);
var ticker = 0;
var isSwiped = false;

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
    console.log("check")
    if(direction == "left"){
      nthChild = ":nth-child(" + (cards.length - position) + ")";
      selectedCard = $(".icon-card" + nthChild)
      selectedCard.addClass("swiped");
      ticker++
    }else if(ticker >= 1){
      nthChild = ":nth-child(" + (cards.length - position + 1) + ")";
      selectedCard = $(".icon-card" + nthChild);
      selectedCard.removeClass("swiped");
      ticker--
    };
    swapCardTimeout();
  }
}

function swapCardTimeout() {
  isSwiped = true;
  setTimeout(function() {
    isSwiped = false;
  }, 400);
}