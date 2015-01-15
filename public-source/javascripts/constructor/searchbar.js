var searchField = $(".search-field");
var searchContent = $(".sentence-content");
var searchForm = $(".sentence-content .form");

// This will trigger when the user clicks on the searchbar
searchField.on("focus", function(){
  searchContent.addClass("active");  
});

// This will trigger when user clicks away from the searchbar
searchField.on("blur", function(){
  searchContent.removeClass("active");  
});

// This will trigger when the users hits 'enter'
searchForm.on("submit", function(e){
  searchContent.removeClass("active");
  searchField.blur();
  e.preventDefault();
});