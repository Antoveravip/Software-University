<?php

class AccountModel extends BaseModel {
    public function onInit() {
        session_set_cookie_params(1800,"/");
    }

    public function register($username, $password) {
        $statement = self::$db->prepare("SELECT id FROM users WHERE username = ?");
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result();
        if($result->fetch_all()) {
            return false;
        }

        $password_hash = password_hash($password, PASSWORD_BCRYPT);
        $role_id = 2;
        $statement2 = self::$db->prepare("INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)");
        $statement2->bind_param("ssi", $username, $password_hash, $role_id);
        $statement2->execute();

        return true;
    }

    public function login($username, $password) {
        $statement = self::$db->prepare("SELECT id, username, password, role_id FROM users WHERE username = ?");
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result();
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            return $user;
        }

        return false;
    }
}