var searchField = $(".search-field");
var searchContent = $(".sentence-content");

searchField.on("focus", function(){
  searchContent.addClass("active");  
});

searchField.on("blur", function(){
  searchContent.removeClass("active");  
});