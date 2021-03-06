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
      
      <!--=== NOUN Sentence [ApiController] ===-->
      <section class="sentence">
        <div class="colored-sidebar pink right"></div>
        <div class="sentence-content" ng-controller="apiController as api">

          <!-- searchbar -->
          <div class="search-bar">
            <form class="form">
              <input class="search-field" type="text" placeholder="search...">
            </form>
            <div class="search-icon">
              <img class="search" src="public/media/img/search-icon.png">
              <img class="cancel" src="public/media/img/cross-icon.png">
            </div>
          </div>

          <!-- search result cards -->
          <div class="search-result" id="card-swipe">
            <div class="card-holder">
              <div class="icon-card" ng-repeat="icon in iconResults">
                <div class="icon-holder">
                  <div class="icon circle">
                    <img ng-src="{{icon.preview_url}}">
                  </div>
                </div>
                  <div class="author">
                    <p class="strong">created by : </p>
                    <p class="name">{{icon.uploader.name}}</p>
                  </div>
              </div>
            </div>

            <!-- empty search card -->
            <div class="empty-card">
              <div class="icon"><div ng-include="'public/media/svg/search.svg'"></div></div>
              <div class="text"><p>Search for a word you want to have translated into your own fancy icon. You can click on the icons to 'add' them below, to form your own sentence</p></div>
            </div>
          </div>

          <!-- search suggestions -->
          <div class="search-completion">
            <div class="completion-content">
              <div class="word">plane</div>
            </div>
          </div>

          <!-- card orbs -->
          <div class="card-position">
            <ul>
              <li ng-class="{active:$first}" ng-repeat="icon in iconResults"></li>
            </ul>
          </div>

          <!-- sentence creator -->
          <div class="sentence-creator">
            <div class="help-text">Double click an icon to add it to a sentence</div>
            <div class="sentence-holder" id="sentence-item-press">
              <div class="sentence-item" data-icon-position="first">
                <div class="icon"><img src=""></div>
                <div class="icon plus">+</div>
              </div>
              <div class="sentence-item" data-icon-position="second">
                <div class="icon"><img src=""></div>
                <div class="icon plus">+</div>
              </div>
              <div class="sentence-item" data-icon-position="third">
                <div class="icon"><img src=""></div>
              </div>
            </div>
          </div>

        </div>
      </section><!--

      --><!--=== NOUN homescreen ===--><!--
      --><section class="homescreen" id="homescreen-swipe">
        <div class="colored-sidebar pink"></div>
        <div class="branding">
          <div class="branding-content">
            <div class="logo"><p><span>noun</span>translate</p></div>
            <div class="icon"><div ng-include="'public/media/svg/travel-around-world.svg'"></div></div>
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
            <div class="category-section"    ng-repeat="icon in imageList.travel">
              <div class="category-image" ng-click="imageClick($index, 'travel')" ng-class="{ 'active' : $index == selectedIndex && category == 'travel'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'travel'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'travel'}"><p>Created by: {{icon.name}}</p></div>
              </div>
            </div>

            <p><span>noun</span>groceries</p><hr>
            <div class="category-section"    ng-repeat="icon in imageList.groceries">
              <div class="category-image" ng-click="imageClick($index, 'groceries')" ng-class="{ 'active' : $index == selectedIndex && category == 'groceries'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'groceries'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'groceries'}"><p>Created by: {{icon.name}}</p></div>
              </div>
            </div>

            <p><span>noun</span>general</p><hr>
            <div class="category-section"    ng-repeat="icon in imageList.general">
              <div class="category-image" ng-click="imageClick($index, 'general')" ng-class="{ 'active' : $index == selectedIndex && category == 'general'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'general'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'general'}"><p>Created by: {{icon.name}}</p></div>
              </div>
            </div>

            <p><span>noun</span>recreation</p><hr>
            <div class="category-section"    ng-repeat="icon in imageList.recreation">
              <div class="category-image" ng-click="imageClick($index, 'recreation')" ng-class="{ 'active' : $index == selectedIndex && category == 'recreation'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'recreation'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'recreation'}"><p>Created by: {{icon.name}}</p></div>
              </div>
            </div>

            <p><span>noun</span>health</p><hr>
            <div class="category-section"    ng-repeat="icon in imageList.health">
              <div class="category-image" ng-click="imageClick($index, 'health')" ng-class="{ 'active' : $index == selectedIndex && category == 'health'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'health'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'health'}"><p>Created by: {{icon.name}}</p></div>
              </div>
            </div>

            <p><span>noun</span>transport</p><hr>
            <div class="category-section"    ng-repeat="icon in imageList.transport">
              <div class="category-image" ng-click="imageClick($index, 'transport')" ng-class="{ 'active' : $index == selectedIndex && category == 'transport'}">
                <img  src="{{icon.src}}" ng-class="{ 'active' : $index == selectedIndex && category == 'transport'}"/>
                <div class="category-text" ng-class="{ 'active' : $index == selectedIndex && category == 'transport'}"><p>Created by: {{icon.name}}</p></div>
              </div>
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