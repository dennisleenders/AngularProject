(function() {
  app.controller('ProjectController', function(){
  
   var knowledge = this;

    for (var i = skills.length - 1; i >= 0; i--) {
    	knowledge = skills[i];
    	console.log(knowledge);
    };

  });

  	var skills = [{
		"traveling": [{
				"name": "Kenneth Appiah",
				"label": "pisa",
				"src": "public/media/images/noun/traveling/pisa.svg"
			},
			{
				"name": "Oliver TubeGeometry(path, segments, radius, radialSegments, closed)",
				"label": "eiffel tower",
				"src": "public/media/images/noun/traveling/eiffel.svg"
			},
			{
				"name": "Adriano Gazzellini",
				"label": "colosseum",
				"src": "public/media/images/noun/traveling/colisseum.svg"
		}]
	}];

})();