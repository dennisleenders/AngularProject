
var app = angular.module('nounTranslate', []);

app.controller('apiController', function(){
  console.log("Angular controller active");

  var request_data = {
      url: 'oath.php',
      method: 'GET',
      data: {
        term: 'beer',
        site: 'http://api.thenounproject.com/'
      } 
  };

  $.ajax({
      url: request_data.url,
      type: request_data.method,
      data: request_data.data
  }).done(function(data) {
      console.log("Ajax done");
      console.log("data -->",data);
  }).fail(function(data) {
      console.log("Ajax fail");
      console.log("data -->",data);
  });

});