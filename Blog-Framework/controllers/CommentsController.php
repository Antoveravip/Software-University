<?php

class CommentsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Comments";
        $this->db = new CommentsModel();
    }

    public function index() {
        $this->redirect('posts');
    }

    public function create() {
        if ($this->isPost) {
            $visitor = $_POST['author'];
            $email = $_POST['email'];
            $content = $_POST['content'];
            $post_id = $_POST['post_id'];
            if ($this->db->createComment($content, $visitor, $post_id, $email, $status_id = 1)) {
                $this->addInfoMessage("Comment added.");
                $this->redirect('posts', 'view', $post_id);
            } else {
                $this->addErrorMessage("Error adding comment.");
            }
        }
    }

    public function delete($id) {
        $this->authorize();
        if ($this->db->deleteComment($id)) {
            $this->addInfoMessage("Comments deleted.");
        } else {
            $this->addErrorMessage("Cannot delete comment.");
        }
        $this->redirect('authors');
    }
}