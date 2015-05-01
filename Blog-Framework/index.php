<?php
session_start();
require_once('includes/config.php');

// Define the request home that will always persist in REQUEST_URI
$request_home = DX_DS . DX_ROOT_PATH;
$request = $_SERVER['REQUEST_URI'];
$requestParts = array();
$controllerName = DEFAULT_CONTROLLER;
$action = DEFAULT_ACTION;
$params = array();

if ( ! empty( $request ) ) {
    if( 0 === strpos( $request, $request_home ) ) {
        // Clean the request
        $request = substr( $request, strlen( $request_home ) );

        // Switch to admin routing
        if( 0 === strpos( $request, 'admin' ) ) {
            $admin_routing = true;
            include_once 'controllers/admin/admin_controller.php';
            $request = substr( $request, strlen( 'admin/' ) );
        }


        // Fetch the controller, method and params if any
        $requestParts = explode( DX_DS, $request, 3 );

        // Get controller and such
        if ( 1 < count( $requestParts ) ) {
            list( $controllerName, $action ) = $requestParts;

            $params = isset( $requestParts[2] ) ? $requestParts[2] : array();
        }
    }
}

$controllerClassName = ucfirst(strtolower($controllerName)) . 'Controller';
$controllerFileName = "controllers/" . $controllerClassName . '.php';

if (class_exists($controllerClassName)) {
    $controller = new $controllerClassName($controllerName, $action);
} else {
    die("Cannot find controller '$controllerName' in class '$controllerFileName'");
}

if (method_exists($controller, $action)) {
    //$controller->{$action}($params);
    call_user_func_array(array($controller, $action), $params);
    $controller->renderView();
} else {
    die("Cannot find action '$action' in controller '$controllerClassName'");
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
