<?php 

//---- GENERAL INFORMATION ----//
// What happens is that we $.ajax this php file in our angular project, this file will take the TERM and SITE data
// from that $.ajax request and use the "OAUTHSTORE" php class, to make a two-legged OAUTH request to the nounproject
// server. When we get our response we will echo that response, so that our $.ajax callback in our angular project will
// get the json we just recieved from our two-legged OAUTH request.

// Two-legged authentication : authentication without the need of user login ( only need key and secret )
// Three-legged authentication : authentication with the need of user login ( need key and secret, and consumer token)
// GET the term we past in our $.ajax in the URI by $_GET[""] requesting it
// Using variales in a string in php : "{$var} much string"

//---- INCLUDED FILES ----//
include_once "public/oauth-php/OAuthStore.php";
include_once "public/oauth-php/OAuthRequester.php";

//---- NOUN PROJECT SPECIFIC VARIABLES ----//
$key = '9c704cb011c545cb82706dccd0334e12'; // this is your consumer key
$secret = '45b7a8d867d640659acd0979189fc711'; // this is your secret key
$site = $_GET["site"]; // the site we use
$term = $_GET["term"]; // the term we search on, on thenounproject
$response = '';

//---- OAUTH AUTENTICATION ARRAY ----//
$options = array( 'consumer_key' => $key, 'consumer_secret' => $secret );
OAuthStore::instance("2Leg", $options );

//---- NOUN PROJECT URL QUERY PARAMETERS ----//
// limit_to_public_domain (int) – limit results to public domain icons only
// limit (int) – maximum number of results
// offset (int) – number of results to displace or skip over
// page (int) – number of results of limit length to displace or skip over
$url = "{$site}icons/{$term}?limit=5"; // this is the URL of the request


//---- REQUEST PARAMETERS ----//
$method = "GET"; // you can also use POST instead
$params = null;

//---- THE OAUTH REQUEST ----//
try {
  // Obtain a request object for the request we want to make
  $request = new OAuthRequester($url, $method, $params);

  // Sign the request, perform a curl request and return the results, 
  // throws OAuthException2 exception on an error
  // $result is an array of the form: array ('code'=>int, 'headers'=>array(), 'body'=>string)
  $result = $request->doRequest();
  
  $response = $result['body'];
}
catch(OAuthException2 $e) {
  echo $e;
}

//---- AJAX CALLBACK ----//
// What we send back to the ajax request
echo $response;

?>