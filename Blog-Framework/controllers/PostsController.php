<?php

class PostsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Blog";
        $this->db = new PostsModel();
        $this->categories = $this->db->getCategories();
        $this->statuses = $this->db->getStatuses();
        $this->allTags = $this->db->getTags();
    }

    public function index() {
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
                $post['tags'] = $this->db->getPostTags($id);
                $post['comments'] = $this->db->getPostComments($id);
                $this->post = $post;
                $this->title = $post['title'];
            } else {
                $this->addErrorMessage("Missing post id!");
                $this->redirect('posts');
            }
        }
    }


    public function create() {
        $this->authorize();
        if ($this->isPost) {
            $user_id = $_POST['user_id'];
            $title = $_POST['title'];
            $content = $_POST['content'];
            $category_id = $_POST['category'];
            $status_id = $_POST['status'];
            $tags  = $_POST['tags'];
            if ($this->db->createPost($user_id, $title, $content, $category_id, $status_id, $tags)) {
                $this->addInfoMessage("Post created.");
                $this->redirect('posts');
            } else {
                $this->addErrorMessage("Error creating post.");
            }
        }
    }

    public function delete($id) {
        $this->authorize();
        if ($this->db->deletePost($id)) {
            $this->addInfoMessage("Post deleted.");
        } else {
            $this->addErrorMessage("Cannot delete post.");
        }
        $this->redirect('posts');
    }
}