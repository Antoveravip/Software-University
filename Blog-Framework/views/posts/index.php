<h1><?= htmlspecialchars($this->title) ?></h1>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-9">
        <p class="pull-right visible-xs">
            <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
        </p>
        <div class="jumbotron">
            <h1>Hello, all!</h1>
            <p>Welcome, to my blog.</p>
        </div>
        <div class="row">
            <?php foreach ($this->posts as $post) : ?>
            <div class="col-xs-6 col-lg-4">
                <h2><?= htmlspecialchars($post['title']) ?></h2>
                <?php $date = new DateTime($post['published'])?>
                <p>Published by: <span class="author"><?= htmlspecialchars($post['username']) ?></span></p>
                <p><?= htmlspecialchars($post['content']) ?></p>
                <p>Viewed <span class="viewed"><?= htmlspecialchars($post['views']) ?></span> times.</p>
                <p><a class="btn btn-default" href="<?= DX_ROOT_URL ?>posts/view/<?= $post['id']?>" role="button">Read more &raquo;</a></p>
            </div><!--/.col-xs-6.col-lg-4-->
            <?php endforeach ?>
        </div><!--/row-->
    </div><!--/.col-xs-12.col-sm-9-->

</div><!--/row-->