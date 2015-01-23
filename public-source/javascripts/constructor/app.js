var app = angular.module('nounTranslate', []);

app.controller('apiController', function($scope, $http){

  var searchField = $('.search-field');
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
        
        // We will first check if there are pictures without authors and give them an anonymous name
        for (var i = 0; i < data.icons.length; i++) {
          if(data.icons[i].uploader == undefined || data.icons[i].uploader == "") {
            data.icons[i].uploader = {"name":"Anonymous"};
          }
        };

        $scope.iconResults = data.icons;

        // Will reset the cardPosition, so that the the cardSwipe() function gets correct values
        cardPosition = 0;

        // This will display:inline-block the little orbs that indicate what card you're watching
        $scope.sliderDot();
        $scope.goFullscreenRemove();
        cardHolderEl.show();
      }).error(function(data){
        console.log("Ajax fail");
      });
    }
  });
  
  $scope.sliderDot = function() {
    //in the HTML the ng-class="{active:$first}" will add .active to the first ng-repeated slider dot
    sliderDots.show();
  };

  $scope.goFullscreenRemove = function() {
    goFullscreenEl.removeClass('active');
  }

});