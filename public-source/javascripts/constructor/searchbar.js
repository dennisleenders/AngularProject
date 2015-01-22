
// This will trigger when the user clicks on the searchbar
searchField.on("focus", function(){
  searchContent.addClass("active");  
});

// This will trigger when user clicks away from the searchbar
searchField.on("blur", function(){
  setTimeout(function() {
    searchContent.removeClass("active");  
  }, 10);
});

// This will trigger when the users hits 'enter'
searchForm.on("submit", function(e){
  searchContent.removeClass("active");
  searchField.blur();
  e.preventDefault();
});

searchCancel.on("click",function(){
  if(searchContent.hasClass('active')){
    searchField.val('');
  }
})

// Suggested words event watcher
suggestedWords.on("click",function(e){
  searchField.val(e.currentTarget.innerHTML);
  
  var triggerEnter = jQuery.Event("keydown");
  triggerEnter.keyCode = 13;
  searchField.trigger(triggerEnter);
});