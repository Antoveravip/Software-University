<?php

class CommentsModel extends BaseModel {
    public function getAll($id) {
        $statement = self::$db->prepare("SELECT * FROM comments WHERE post_id = ? ORDER BY id");
        $statement->bind_param("i", $id);
        $statement->execute();
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getComment($id) {
        $statement = self::$db->prepare("SELECT * FROM comments WHERE id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function createComment($text, $name, $post_id, $comment_id = null, $email = null, $status_id = 1) {
        if ($text == '' || $name == '' || $post_id == '') {
            return false;
        }

        $statement = self::$db->prepare(
            "INSERT INTO comments VALUES(?, ?, ?, ?, ?, ?)");
        $statement->bind_param("sssiii", $name, $email, $text, $post_id, $comment_id, $status_id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function deleteComment($id) {
        $comment = self::getComment($id);
        var_dump($comment);
        if(!$comment) {
            return false;
        }

        if($comment->id != null) {
            var_dump($comment->id);
            deleteComment($comment->id);
        }

        $statement = self::$db->prepare(
            "DELETE FROM comments WHERE id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function changeStatus($id, $status_id) {
        $comment = self::getComment($id);
        var_dump($comment);
        if(!$comment) {
            return false;
        }

        if($comment->id != null) {
            var_dump($comment->id);
            changeStatus($comment->id, $status_id);
        }

        $statement = self::$db->prepare(
            "UPDATE comments WHERE id = ? SET status_id = ?");
        $statement->bind_param("ii", $id, $status_id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }
}
