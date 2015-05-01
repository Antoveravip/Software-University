<?php

class PostsModel extends BaseModel {
    public function getAll() {
        $statement = self::$db->query(
            "SELECT p.id, p.title, p.published, p.content, p.view, p.user_id, u.username, p.category_id,
                  c.name AS category, p.status_id, s.name as status
                FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    LEFT JOIN users u ON p.user_id = u.id
                    LEFT JOIN statuses s ON p.status_id = s.id
                ORDER BY p.published DESC");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getPost($id) {
        $statement = self::$db->prepare("SELECT p.id, p.title, p.published, p.content, p.view, p.user_id, u.username, p.category_id,
                  c.name AS category, p.status_id, s.name as status
                FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    LEFT JOIN users u ON p.user_id = u.id
                    LEFT JOIN statuses s ON p.status_id = s.id
                WHERE p.id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        $result = $statement->get_result();
        $row = $result->fetch_assoc();
        return $row;
    }

    public function createPost($title, $content, $view = 0, $category_id = 1, $status_id = 1) {
        if ($title == '') {
            return false;
        }
        $published = new DateTime();
        $statement = self::$db->prepare(
            "INSERT INTO posts VALUES(?, ?, ?, ?, ?, ?)");
        $statement->bind_param("sssiii", $title, $published, $content, $view, $category_id, $status_id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function deletePost($id) {
        $post = self::getPost($id);
        var_dump($post);
        if(!$post) {
            return false;
        }
        /*
        if($comment->id != null) {
            var_dump($comment->id);
            deleteComment($comment->id);
        }*/

        $statement = self::$db->prepare(
            "DELETE FROM posts WHERE id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function changeStatus($id, $status_id) {
        $post = self::getPost($id);
        var_dump($post);
        if(!$post) {
            return false;
        }
        /*
        if($comment->id != null) {
            var_dump($comment->id);
            changeStatus($comment->id, $status_id);
        }*/

        $statement = self::$db->prepare(
            "UPDATE posts WHERE id = ? SET status_id = ?");
        $statement->bind_param("ii", $id, $status_id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }
}