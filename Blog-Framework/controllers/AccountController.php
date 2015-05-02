<?php

class AccountController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = 'Account';
        $this->db = new AccountModel();
    }

    public function index() {
        $this->redirect("account", "register");
    }

    public function register() {
        $this->title = 'Register';
        if($this->isPost) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $registrationSuccess = $this->db->register($username, $password);
            if($registrationSuccess) {
                $this->login($username, $password);

                $this->addInfoMessage("Successful registration");
                $this->redirect("account", "login");
            }
            else {
                $this->addErrorMessage("Registration error!");
                $this->redirect("account", "register");
            }

            $this->redirect("posts");
        }

        $this->renderView(__FUNCTION__);
    }

    public function login() {
        $this->title = 'Login';
        if($this->isPost) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $loginSuccess = $this->db->login($username, $password);
            if ($loginSuccess) {
                $_SESSION['username'] = $username;
                $_SESSION['id'] = $loginSuccess['id'];
                if($loginSuccess['role_id'] == 1) {
                    $this->setAdminLogin(true);
                } else if ($loginSuccess['role_id'] == 2) {
                    $this->setEditorLogin(true);
                } else {
                    $this->setAdminLogin(false);
                    $this->setEditorLogin(false);
                }
                $this->addInfoMessage("Login success");
                $this->redirect("posts");
            }
            else {
                $this->addErrorMessage("Login error");
                $this->redirect("account", "login");
            }
        }

        $this->renderView(__FUNCTION__);
    }

    public function logout() {
        $this->title = 'Logout';
        $this->authorize();

        if($this->isPost) {
            session_destroy();
            session_start();
            $this->addInfoMessage("You are logged out!");
            $this->redirect("Home");
        }
    }
}