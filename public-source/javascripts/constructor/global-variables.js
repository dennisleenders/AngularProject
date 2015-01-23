// GLOBAL VARIABLES

// -- Section Swipe -- //
var wrapperElement = $(".noun-wrapper");
var swipeElement = document.getElementById('homescreen-swipe');

// -- Card Swipe -- //
var cardSwipeEl = document.getElementById('card-swipe');
var cardHolderEl = $('.card-holder');
var cardPosition = 0;
var isSwiped = false;

// -- Sentence Creator -- //
var sentenceItemHammerEl = document.getElementById('sentence-item-press');
var sentenceItemEl = $('.sentence-item');
var sentenceCreatorEl = $('.sentence-creator');
var sentenceFullscreenCancelEl = $('.sentence-creator .cancel');
var currentIcon = $('.icon-card:last-of-type').find('img');
var sentenceLength = 0;

// -- Hammer Js -- //
var modeSelection = new Hammer(swipeElement);
var sentenceHammer = new Hammer(sentenceItemHammerEl);
var cardEl = new Hammer.Manager(cardSwipeEl);
cardEl.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
cardEl.add( new Hammer.Pan({ event: 'panright', direction:Hammer.DIRECTION_RIGHT}) );
cardEl.add( new Hammer.Pan({ event: 'panleft', direction:Hammer.DIRECTION_LEFT}) );

// -- Slider Dots -- //
var sliderDots = $('.card-position');

// -- Search Bar -- //
var searchField = $(".search-field");
var searchContent = $(".sentence-content");
var searchForm = $(".sentence-content .form");
var searchCancel = $('.search-icon');

// -- Word Suggestion Field -- //
var suggestedWords = $('.completion-content .word');

// -- Go Fullscreen -- //
var goFullscreenEl = $('.go-fullscreen');