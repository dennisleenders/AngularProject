// GLOBAL VARIABLES

// -- Section Swipe -- //
var wrapperElement = $(".noun-wrapper");
var swipeElement = document.getElementById('homescreen-swipe');

// -- Card Swipe -- //
var cardSwipeEl = document.getElementById('card-swipe');
var cardEl = new Hammer(cardSwipeEl);
var cardPosition = 0;
var isSwiped = false;

// -- Slider Dots -- //
var sliderDots = $('.card-position');

// -- Search Bar -- //
var searchField = $(".search-field");
var searchContent = $(".sentence-content");
var searchForm = $(".sentence-content .form");
