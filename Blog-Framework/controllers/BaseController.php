<?php

abstract class BaseController {
    protected $controllerName;
    protected $actionName;
    protected $layoutName = DEFAULT_LAYOUT;
    protected $isViewRendered = false;
    protected $isPost = false;
    protected $isLoggedIn;
    protected $isAdmin;
    protected $isEditor;
    protected $validationErrors;
    protected $formValues;
    protected $categories;
    protected $statuses;


    function __construct($controllerName, $actionName) {
        $this->controllerName = $controllerName;
        $this->actionName = $actionName;

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->isPost = true;
        }

        if (isset($_SESSION['username'])) {
            $this->isLoggedIn = true;
        }

        if (isset($_SESSION['admin'])) {
            $this->isAdmin = true;
        }

        if (isset($_SESSION['editor'])) {
            $this->isEditor = true;
        }


        $this->onInit();
    }

    public function onInit() {
        // Implement initializing logic in the subclasses
    }

    public function index() {
        // Implement the default action in the subclasses
    }

    public function renderView($viewName = null, $includeLayout = true) {
        if (!$this->isViewRendered) {
            if ($viewName == null) {
                $viewName = $this->actionName;
            }
            $viewFileName = 'views/' . $this->controllerName
                . '/' . $viewName . '.php';
            if ($includeLayout) {
                $headerFile = 'views/layouts/' . $this->layoutName . '/header.php';
                include_once($headerFile);
            }
            include_once($viewFileName);
            if ($includeLayout) {
                $footerFile = 'views/layouts/' . $this->layoutName . '/footer.php';
                include_once($footerFile);
            }
            $this->isViewRendered = true;
        }
    }

    public function redirectToUrl($url) {
        header("Location: " . $url);
        die;
    }

    public function redirect($controllerName, $actionName = null, $params = null) {
        $url = DX_ROOT_URL . urlencode($controllerName);
        if ($actionName != null) {
            $url .= '/' . urlencode($actionName);
        }
        if ($params != null) {
            $encodedParams = array_map($params, 'urlencode');
            if($encodedParams) {
                $url .= implode(DX_DS, $encodedParams);
            } else {
                $url .= DX_DS . $params;
            }
        }
        $this->redirectToUrl($url);
    }

    public function authorize() {
        if (! $this->isLoggedIn) {
            $this->addErrorMessage("Please login first");
            $this->redirect("account", "login");
        }
    }

    public function setAdminLogin($value) {
        $_SESSION['admin'] = true;
    }

    public function setEditorLogin($value) {
        $_SESSION['editor'] = true;
    }

    public function addValidationError($field, $message) {
        $this->validationErrors[$field] = $message;
    }

    public function getValidationError($field) {
        return $this->validationErrors[$field];
    }

    public function addFieldValue($field, $value) {
        $this->formValues[$field] = $value;
    }

    public function getFieldValue($field) {
        return $this->formValues[$field];
    }

    private function addMessage($msgSessionkey, $msgText) {
        if (!isset($_SESSION[$msgSessionkey])) {
            $_SESSION[$msgSessionkey] = [];
        }
        array_push($_SESSION[$msgSessionkey], $msgText);

    }

    protected function addErrorMessage($errorMsg) {
        $this->addMessage(ERROR_MESSAGES_SESSION_KEY, $errorMsg);
    }

    protected function addInfoMessage($infoMsg) {
        $this->addMessage(INFO_MESSAGES_SESSION_KEY, $infoMsg);
    }
}