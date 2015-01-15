(function() {
    app.controller('imageController', function(){

     this.imageList = imageJson;
     console.log(imageJson);
    });
        var imageJson = {
            "travel": [{
                "name": "Kenneth Appiah",
                "label": "pisa",
                "src": "public/media/images/noun/traveling/pisa.svg"
            },
            {
                "name": "Oliver TubeGeometry",
                "label": "eiffel tower",
                "src": "public/media/images/noun/traveling/eiffel.svg"
            },
            {
                "name": "Adriano Gazzellini",
                "label": "colosseum",
                "src": "public/media/images/noun/traveling/colisseum.svg"
            }]
        };
        // #########

        

})();