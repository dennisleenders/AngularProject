(function() {
    app.controller('imageController', function($scope){

     $scope.imageList = imageJson;
     $scope.selectedIndex = null;
     $scope.alreadySelected = false;
     $scope.category;

     $scope.imageClick = function($index, category){
        console.log($scope.category, category);
        $scope.category = category;

        if($scope.selectedIndex == $index){
            $index = -1;
        }

        $scope.selectedIndex = $index;
     }

    });
        var imageJson = {
        "travel": [{
                "name": "Kenneth Appiah",
                "label": "pisa",
                "src": "public/media/images/noun/traveling/pisa.png"
            },
            {
                "name": "Oliver TubeGeometry",
                "label": "eiffel tower",
                "src": "public/media/images/noun/traveling/eiffel.png"
            },
            {
                "name": "Adriano Gazzellini",
                "label": "colosseum",
                "src": "public/media/images/noun/traveling/coliseum.png"
            }],
        "groceries": [{
                "name": "Kyle Tezak",
                "label": "booze",
                "src": "public/media/images/noun/groceries/booze.png"
            },
            {
                "name": "Kyle Tezak",
                "label": "coffee",
                "src": "public/media/images/noun/groceries/coffee.png"
            },
            {
                "name": "Kyle Tezak",
                "label": "fish",
                "src": "public/media/images/noun/groceries/fish.png"
            },
            {
                "name": "Kyle Tezak",
                "label": "ice cream",
                "src": "public/media/images/noun/groceries/ice.png"
            },
            {
                "name": "Kyle Tezak",
                "label": "meat",
                "src": "public/media/images/noun/groceries/meat.png"
            },
            {
                "name": "Kyle Tezak",
                "label": "meat",
                "src": "public/media/images/noun/groceries/union.png"
            }],
        "general": [
            {
                "name": "SuperAtic LABS",
                "label": "information",
                "src": "public/media/images/noun/general/information.png"
            },
            {
                "name": "Ulrich Pohl",
                "label": "shopping",
                "src": "public/media/images/noun/general/shopping.png"
            },
            {
                "name": "Alex Sheyn",
                "label": "weather",
                "src": "public/media/images/noun/general/weather.png"
            }],
        "recreation": [{
                "name": "SuperAtic LABS",
                "label": "beach",
                "src": "public/media/images/noun/recreation/beach.png"
            },
            {
                "name": "misirlou",
                "label": "mountain",
                "src": "public/media/images/noun/recreation/mountain.png"
            },
            {
                "name": "Saman Bemel-Benrud",
                "label": "pool",
                "src": "public/media/images/noun/recreation/swimming.png"
            },
            {
                "name": "Saman Bemel-Benrud",
                "label": "pool",
                "src": "public/media/images/noun/recreation/weight.png"
            },
            {
                "name": "Saman Bemel-Benrud",
                "label": "pool",
                "src": "public/media/images/noun/recreation/reading.png"
            },
            {
                "name": "1982",
                "label": "tennis",
                "src": "public/media/images/noun/recreation/tennis.png"
            }],
        "health": [{
                "name": "OCHA Visual Information Unit",
                "label": "apothecaria",
                "src": "public/media/images/noun/health/apothecaria.png"
            },
            {
                "name": "Role Play",
                "label": "ehbo",
                "src": "public/media/images/noun/health/healthcare.png"
            },
            {
                "name": "Unknown",
                "label": "pregnant",
                "src": "public/media/images/noun/health/pregnant.png"
            }],
        "transport": [{
                "name": "Unknown",
                "label": "bike",
                "src": "public/media/images/noun/transport/bike.png"
            },
            {
                "name": "Unknown",
                "label": "bus",
                "src": "public/media/images/noun/transport/bus.png"
            },
            {
                "name": "Naomi Atkinson",
                "label": "plane",
                "src": "public/media/images/noun/transport/plane.png"
            },
            {
                "name": "misirlou",
                "label": "scooter",
                "src": "public/media/images/noun/transport/scooter.png"
            },
            {
                "name": "Unknown",
                "label": "taxi",
                "src": "public/media/images/noun/transport/car.png"
            },
            {
                "name": "Alex Auda Samora",
                "label": "wheelchair",
                "src": "public/media/images/noun/transport/wheelchair.png"
            }]
        };
        // #########

        

})();