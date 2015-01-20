
var app = angular.module('nounTranslate', []);

app.controller('apiController', function($scope, $http){

  var searchField = $('.search-field');
  var cardPosition = $('.card-position');
  var inputValue;
  
  // On the keydown enter we will do a callback to the API of NOUNproject
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

      // We use $HTTP since it will trigger a "digest", digests will update things like ng-repeat
      // or live code injection
      $http({
        url: request_data.url,
        method: request_data.method,
        params: {term:request_data.data.term,site:request_data.data.site}
      }).success(function(data){
        // If the call was a success we will set the json to the Controller's $scope (this).
        // This way our directives in the html can read them.
        $scope.iconResults = data.icons;
        cardPosition.show();
      }).error(function(data){
        console.log("Ajax fail");
      });
    }
  });

});