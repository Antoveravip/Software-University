<?php
session_start();
require_once('includes/config.php');

// Define the request home that will always persist in REQUEST_URI
$request_home = DX_ROOT_URL;
$request = $_SERVER['REQUEST_URI'];
$request = str_replace("/blog/","/",$request);
$requestParts = array();
$controllerName = DEFAULT_CONTROLLER;
$actionName = DEFAULT_ACTION;
$params = array();
echo 'Request Home';
var_dump($request_home);
echo 'request';
var_dump($request);
echo 'requestParts';
var_dump($requestParts);
echo 'controllerName';
var_dump($controllerName);
echo 'Request Home';
var_dump($params);
if ( ! empty( $request ) ) {
    if( 0 === strpos( $request, $request_home ) ) {
        // Clean the request
        $request = substr( $request, strlen( $request_home ) );
        var_dump($request);
        // Switch to admin routing
        if( 0 === strpos( $request, 'admin' ) ) {
            $admin_routing = true;
            include_once 'controllers/admin/admin_controller.php';
            $request = substr( $request, strlen( 'admin/' ) );
        }


        // Fetch the controller, method and params if any
        $requestParts = explode( DX_DS, $request, 3 );
        var_dump($requestParts);
        // Get controller and such
        if ( 1 < count( $requestParts ) ) {
            list( $controllerName, $action ) = $requestParts;

            $params = isset( $requestParts[2] ) ? $requestParts[2] : array();
        }

        var_dump($params);
    }
}


/*$requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
var_dump($requestPath);
$requestParts = explode('/', $requestPath);
var_dump($requestParts);*/
$controllerName = DEFAULT_CONTROLLER;
if (count($requestParts) >= 3 && $requestParts[2] != '') {
    $controllerName = strtolower($requestParts[2]);
    if (! preg_match('/^[a-zA-Z0-9_]+$/', $controllerName)) {
        die('Invalid controller name. Use letters, digits and underscore only.');
    }
}
$actionName = DEFAULT_ACTION;
if (count($requestParts) >= 4 && $requestParts[3] != '') {
    $actionName = $requestParts[3];
    if (! preg_match('/^[a-zA-Z0-9_]+$/', $actionName)) {
        die('Invalid action name. Use letters, digits and underscore only.');
    }
}
$params = [];
if (count($requestParts) >= 5) {
    $params = array_splice($requestParts, 4);
}



$controllerClassName = ucfirst(strtolower($controllerName)) . 'Controller';
$controllerFileName = "controllers/" . $controllerClassName . '.php';

if (class_exists($controllerClassName)) {
    $controller = new $controllerClassName($controllerName, $actionName);
} else {
    die("Cannot find controller '$controllerName' in class '$controllerFileName'");
}

if (method_exists($controller, $actionName)) {
    //$controller->{$action}($params);
    call_user_func_array(array($controller, $actionName), $params);
    $controller->renderView();
} else {
    die("Cannot find action '$actionName' in controller '$controllerClassName'");
}

$controller->renderView();


function __autoload($class_name) {
    if (file_exists("controllers/$class_name.php")) {
        include "controllers/$class_name.php";
    }
    if (file_exists("models/$class_name.php")) {
        include "models/$class_name.php";
    }
}
