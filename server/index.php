<?php
// evitating CORS problems
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true"); 
header('Access-Control-Allow-Headers: origin, content-type, accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Max-Age: 86400');

require __DIR__ . "/inc/bootstrap.php";
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// if there is a second place on uri and it's not server
// or there's not a string (method) in the next position
if ((isset($uri[1]) && $uri[1] != 'server') || !isset($uri[2])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

// instantiates a new Server Controller and calls the method
require PROJECT_ROOT_PATH . "/Controller/Api/ServerController.php";
$objFeedController = new ServerController();
$strMethodName = $uri[2];
// if there's another parameter of uri, it's an instance id
if (isset($uri[3])) {
    $id = $uri[3];
    $objFeedController->{$strMethodName}($id); 
} else {
    $objFeedController->{$strMethodName}();
}
?>