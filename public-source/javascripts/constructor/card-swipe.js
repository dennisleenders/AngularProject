
// checking our own Hammer js gesture actions
cardEl.on("panright", function(e) {
  swapCard(cardPosition, "right")
});

cardEl.on("panleft", function(e) {
  swapCard(cardPosition, "left");
});

cardEl.on("doubletap", function(e) {
  addIconToSentence(currentIcon);
});

// The touch gestures for the sentence creator
// tap will initiate the fullscreen
sentenceHammer.on("tap", function(e){
  $(sentenceItemHammerEl).addClass('fullscreen');
});

// press will initiate the deletion
sentenceHammer.on("press", function(e){
  console.log(e.target);
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
    var currentChild;
    var currentCard;

    if(direction == "left" && cardPosition < (cards.length - 1)){
      // This will give the swiped card it's 'swipe' class
      // By checking it's position by (the amount of cards - the position of that card)
      // Then it will add a class on that CHILD
      nthChild = ":nth-of-type(" + (cards.length - position) + ")";
      selectedCard = $(".icon-card" + nthChild)
      selectedCard.addClass("swiped");

      // This is the current card that the user is on, since we're swiping left
      // we need an extra selector that actually does the same thing as swiping right.
      // otherwise you can never select the right card.
      currentChild = ":nth-of-type(" + (cards.length - position - 1) + ")";
      currentCard = $(".icon-card" + currentChild);
      currentIcon = currentCard;
      
      cardPosition = cardPosition + 1;
      sliderDotProgression(direction)

    }else if(direction == "right" && cardPosition != 0){
      nthChild = ":nth-of-type(" + (cards.length - position + 1) + ")";
      selectedCard = $(".icon-card" + nthChild);
      selectedCard.removeClass("swiped");

      // This is the current card that you see
      // it's different from swiping left, since swiping right resets the cards position
      // making it the visible one at that moment in time
      currentIcon = selectedCard;

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

function addIconToSentence(icon){
  if (sentenceLength <= 2) {
    $('.help-text').hide();
    iconSrc = icon.find('img').attr('src');

    $('.sentence-item').each(function(index,el){
      if(index == sentenceLength){
        $(el).find('img').attr('src',iconSrc);
        $(el).css({'display':'inline-block'});
      }
    });

    sentenceLength++
  }
}

//function removeIconFromSentence(){} // LATE FEATURE 