<?php

class PostsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Blog";
        $this->postsModel = new PostsModel();
    }

    public function index($id = null) {
        /*if($this->isPost) {
            if(isset($_POST['post_id']) && $_POST['post_id'] != null) {
                $this->comments = $this->db->getAll($_POST['post_id']);
            } else {
                $this->addErrorMessage("Missing post id.");
            }
        }


        $this->redirect('blog');*/

        $this->posts = $this->postsModel->getAll();
    }

    public function read($id) {
        if ($id == '' || !is_int((int)$id)) {
            $this->addErrorMessage("Invalid post id!");
            $this->redirect('posts');
        } else {
            $post = $this->postsModel->getPost($id);
            if($post) {
                $this->post = $post;
                $this->title = $post['title'];
            } else {
                $this->addErrorMessage("Missing post id!");
                $this->redirect('posts');
            }
        }
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