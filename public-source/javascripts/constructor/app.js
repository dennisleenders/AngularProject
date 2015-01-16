
var app = angular.module('nounTranslate', []);

app.controller('apiController', function($scope, $http){

  var searchField = $('.search-field');
  var inputValue;
  //var json;

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

      $http({
        url: request_data.url,
        method: request_data.method,
        params: {term:request_data.data.term,site:request_data.data.site}
      }).success(function(data){
        //json = data;
        $scope.iconResults = data.icons;
        console.log($scope.iconResults[0]);
      }).error(function(data){
        console.log("Ajax fail");
      });
    }
  });

});