<?php

class PostsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Blog";
        $this->db = new PostsModel();
    }

    public function index() {
        /*if($this->isPost) {
            if(isset($_POST['post_id']) && $_POST['post_id'] != null) {
                $this->comments = $this->db->getAll($_POST['post_id']);
            } else {
                $this->addErrorMessage("Missing post id.");
            }
        }


        $this->redirect('blog');*/

        $this->posts = $this->db->getAll();
    }

    public function view($id) {
        if ($id == '' || !is_numeric($id) || !is_int((int)$id)) {
            $this->addErrorMessage("Invalid post id!");
            $this->redirect('posts');
        } else {
            $post = $this->db->getPost($id);
            if($post) {
                $views = (int)$post['views'];
                $views = $views + 1;
                $this->db->updatePostViews($id, $views);
                $post['views'] = $views;
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