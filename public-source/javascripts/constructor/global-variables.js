// GLOBAL VARIABLES

// -- Section Swipe -- //
var wrapperElement = $(".noun-wrapper");
var swipeElement = document.getElementById('homescreen-swipe');

// -- Card Swipe -- //
var cardSwipeEl = document.getElementById('card-swipe');
var cardEl = new Hammer(cardSwipeEl);
var ticker = 0;
var isSwiped = false;

// -- Search Bar -- //
var searchField = $(".search-field");
var searchContent = $(".sentence-content");
var searchForm = $(".sentence-content .form");
