<?php

class PostsModel extends BaseModel {
    public function getAll() {
        $statement = self::$db->query(
            "SELECT p.id, p.title, p.published, p.content, p.views, p.user_id, u.username, p.category_id,
                  c.name AS category, p.status_id, s.name as status
                FROM posts p
                    LEFT JOIN categories c ON p.category_id = c.id
                    LEFT JOIN users u ON p.user_id = u.id
                    LEFT JOIN statuses s ON p.status_id = s.id
                ORDER BY p.published DESC");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getPost($id) {
        $statement = self::$db->prepare("SELECT p.id, p.title, p.published, p.content, p.views, p.user_id, u.username, p.category_id,
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

    public function createPost($user_id, $title, $content, $category_id = 1, $status_id = 1, $tags) {
        if ($title == '') {
            return false;
        }
        $published = (new DateTime())->format('Y-m-d H:i:s');
        $views = 0;
        $category_id = (int)$category_id;
        $status_id = (int)$status_id;
        $user_id = (int)$user_id;
        $statement = self::$db->prepare(
            "INSERT INTO posts (title, published, content, views, category_id, status_id, user_id) VALUES(?, ?, ?, ?, ?, ?, ?)");
        $statement->bind_param("sssiiii", $title, $published, $content, $views, $category_id, $status_id, $user_id);
        $statement->execute();
        $post_id = $statement->insert_id;

        $allTags = explode(',', $tags);
        $allTags = array_map('trim', $allTags);

        foreach($allTags as $tag) {
            $tag_statement = self::$db->prepare("SELECT id, uses FROM tags WHERE name = ?");
            $tag_statement->bind_param("s", $tag);
            $tag_statement->execute();
            $result = $tag_statement->get_result();
            $output = $result->fetch_assoc();
            if($output) {
                $tag_id = $output['id'];
                $count =  $output['uses'];
                $count = $count + 1;
                $insert_tag_statement = self::$db->prepare("UPDATE tags SET uses = ? WHERE id = ?");
                $insert_tag_statement->bind_param("ii", $count, $tag_id);
                $insert_tag_statement->execute();
            } else {
                $insert_tag_statement = self::$db->prepare("INSERT INTO tags (name, uses) VALUES(?, ?)");
                $count = 0;
                $insert_tag_statement->bind_param("si", $tag, $count);
                $insert_tag_statement->execute();
                $tag_id = $insert_tag_statement->insert_id;
            }

            $post_tag_statement = self::$db->prepare("INSERT INTO posts_tags VALUES(?, ?)");
            $post_tag_statement->bind_param("ii", $post_id, $tag_id);
            $post_tag_statement->execute();
        }

        return $statement->affected_rows > 0;
    }

    public function deletePost($id) {
        $post = self::getPost($id);
        if(!$post) {
            return false;
        }
        /*
        if($comment->id != null) {
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

    public function updatePostViews($id, $views) {
        $id = (int)$id;
        $views = (int)$views;
        $statement = self::$db->prepare(
            "UPDATE posts SET views = ? WHERE id = ?");
        $statement->bind_param("ii", $views, $id);
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function getCategories() {
        $statement = self::$db->query(
            "SELECT * FROM categories ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getStatuses() {
        $statement = self::$db->query(
            "SELECT * FROM statuses ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getTags() {
        $statement = self::$db->query(
            "SELECT * FROM tags ORDER BY uses DESC");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getPostTags($id) {
        $statement = self::$db->query(
            "SELECT * FROM tags t JOIN posts_tags pt ON t.id = pt.tag_id WHERE pt.post_id = $id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getPostComments($id) {
        $statement = self::$db->query(
            "SELECT * FROM comments WHERE post_id = $id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }
}