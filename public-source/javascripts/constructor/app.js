
var app = angular.module('nounTranslate', []);

app.controller('apiController', function(){

  var searchField = $('.search-field');
  var inputValue;
  var json

  searchField.on('keydown',function(e){
    if(e.keyCode == 13){
      inputValue = this.value;

      var request_data = {
          url: 'oath.php',
          method: 'GET',
          data: {
            term: inputValue,
            site: 'http://api.thenounproject.com/'
          } 
      };

      $.ajax({
          url: request_data.url,
          type: request_data.method,
          data: request_data.data,
          dataType: "json"
      }).done(function(data) {

          json = data;
          console.log(json);

          for (var i = 0; i < json.icons.length; i++) {
            $(".noun-image").attr("src", json.icons[i].preview_url)
          };
          
      }).fail(function(data) {
          console.log("Ajax fail");
      });
    }
  })
});