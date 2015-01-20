
var cardSwipeEl = document.getElementById('card-swipe');
var cardEl = new Hammer(cardSwipeEl);
var ticker = 0;

cardEl.on("panright", function(e) {
    console.log("right");
    swapCard(ticker)
});

cardEl.on("panleft", function(e) {
    console.log("left");
    swapCard(ticker);
});

function swapCard(ticker) {
  var foundtarget = $("#card-swipe").find("icon-card:nth-child(0)");
  console.log(foundtarget);
}