<?php

class BlogController extends BaseController {
    public function onInit() {
        $this->title = "Project";
    }

    public function index() {
        $this->renderView(__FUNCTION__);
    }
}