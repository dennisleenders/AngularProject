///// oauth
var oauth = OAuth({
    consumer: {
        public: 'f5fa91bedfd54f5da77584ce4c11dbbf',
        secret: '84228963d5e84c1a87027cad68e16081'
    },
    signature_method: 'HMAC-SHA1'
});

////// angular
var app = angular.module('nounTranslate', []);

app.controller('apiController', function(){
  console.log("check");

  var request_data = {
      url: 'http://api.thenounproject.com/icon/1',
      method: 'GET'
  };

  var token = {
    public: 'f5fa91bedfd54f5da77584ce4c11dbbf',
    secret: '84228963d5e84c1a87027cad68e16081'
  };

  $.ajax({
      url: request_data.url,
      type: request_data.method,
      data: oauth.authorize(request_data, token)
  }).done(function(data) {
      //process your data here
  });

});
