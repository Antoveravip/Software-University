<?php

class CommentsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Comments";
        $this->db = new CommentsModel();
    }

    public function index() {
        if($this->isPost) {
            if(isset($_POST['post_id']) && $_POST['post_id'] != null) {
                $this->comments = $this->db->getAll($_POST['post_id']);
            } else {
                $this->addErrorMessage("Missing post id.");
            }
        }

        $this->redirect('blog');
    }

    public function create() {
        if ($this->isPost) {
            $name = $_POST['author_name'];
            if ($this->db->createAuthor($name)) {
                $this->addInfoMessage("Author created.");
                $this->redirect('authors');
            } else {
                $this->addErrorMessage("Error creating author.");
            }
        }
    }

    public function delete($id) {
        if ($this->db->deleteAuthor($id)) {
            $this->addInfoMessage("Author deleted.");
        } else {
            $this->addErrorMessage("Cannot delete author.");
        }
        $this->redirect('authors');
    }
}