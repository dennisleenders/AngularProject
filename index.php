<!doctype html >
<!--[if lt IE 7]> <html class="no-js ie6 oldie"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9 oldie"> <![endif]-->
<!--[if gt IE 9]><!--> <html> <!--<![endif]-->
  <head>
    <!--=== META TAGS ===-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="Dennis Leenders and Tom Luijten">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />

    <title>Noun Translate</title>
    <!--=== Favicon ===-->
    <link rel='shortcut icon' type='image/x-icon' href='public/media/img/favicon.ico' />

    <!--=== Apple Icon ===-->
<!--     <link rel="apple-touch-icon" href="image/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="image/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="image/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="144x144" href="image/apple-touch-icon-144x144.png">
    <link rel="apple-touch-startup-image" href="image/apple-touch-startup-640x920.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)">
    <link rel="apple-touch-startup-image" href="image/apple-touch-startup-320x460.png" media="(device-width: 320px)"> -->

    <!--=== Stylesheet ===-->
    <link rel="stylesheet" type="text/css" href="public/stylesheets/main.css">
    <!--=== Custom fonts ===-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,800,700,300,500' rel='stylesheet' type='text/css'>
  </head>
  <body ng-app="nounTranslate">

    <div class="noun-wrapper">
      
      <!--=== NOUN Sentence ===-->
      <section class="sentence" ng-controller="apiController as api">
        <div class="colored-sidebar pink right"></div>
        <!-- content -->
      </section><!--

      --><!--=== NOUN homescreen ===--><!--
      --><section class="homescreen">
        <div class="colored-sidebar pink"></div>
        <div class="branding">
          <div class="branding-content">
            <div class="logo"><p><span>noun</span>translate</p></div>
            <div class="icon"><?php include("public/media/svg/travel-around-world.svg"); ?></div>
          </div>
        </div>
        <div class="colored-sidebar right"></div>
      </section><!--

      --><!--=== NOUN Words ===--><!--
      --><section class="words">
        <div class="colored-sidebar"></div>
        <!-- content -->
        <div class="previous-button"></div>
        <div class="word-container" ng-controller="imageController as imageCtrl">
          <h1><span>noun</span>words</h1>
          <div class="category-body">
            <p><span>noun</span>travel</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.travel">
              <div class="category-image" ng-include="icon.src"></div>
            </div>

            <p><span>noun</span>groceries</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.groceries">
              <div class="category-image" ng-include="icon.src"></div>
            </div>

            <p><span>noun</span>general</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.general">
              <div class="category-image" ng-include="icon.src"></div>
            </div>

            <p><span>noun</span>recreation</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.recreation">
              <div class="category-image" ng-include="icon.src"></div>
            </div>

            <p><span>noun</span>health</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.health">
              <div class="category-image" ng-include="icon.src"></div>
            </div>

            <p><span>noun</span>transport</p><hr>
            <div class="category-section" ng-repeat="icon in imageCtrl.imageList.transport">
              <div class="category-image" ng-include="icon.src"></div>
            </div>
        </div>
      </section><!--
    --></div>

    <!--=== Javascript ===-->
    <!-- Vendor -->
    <script type="text/javascript" src="public/javascripts/vendor/jquery.js"></script>
    <script type="text/javascript" src="public/javascripts/vendor/angular.js"></script>
    <script type="text/javascript" src="public/javascripts/vendor/hammer.js"></script>
    <!-- App -->
    <script type="text/javascript" src="public/javascripts/app.js"></script>
  </body>
</html>