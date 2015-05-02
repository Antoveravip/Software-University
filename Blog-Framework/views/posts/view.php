<div class="row">

    <div class="col-sm-8 blog-main">

        <div class="blog-post">
            <h2 class="blog-post-title"><?= htmlspecialchars($this->title) ?></h2>
            <?php
                $date = new DateTime($this->post['published']);
                $post = $this->post;
            ?>
            <p class="blog-post-meta"><span class="date"><?= $date->format('j F, Y'); ?></span> by <span class="author"><?= htmlspecialchars($post['username']) ?></span> in <span class="category"><?= htmlspecialchars($post['category']) ?></span></p>

            <div><?= htmlspecialchars($post['content']) ?></div>

            <p>Tags: <?php foreach($post['tags'] as $tag) { ?>
                <span class="tag"><?= htmlspecialchars($tag['name']) ?> </span>
                <?php } ?>
            </p>
            <p><span class="viewed">Viewed: <?= htmlspecialchars($post['views']) ?> times.</span></p>
        </div><!-- /.blog-post -->

        <div>
            <h3>Add comment</h3>

            <form class="navbar-form" action="<?php echo DX_ROOT_URL; ?>comments/create/" method="POST">
                <label for="author">Name:</label>
                <input id="author" type="text" name="author" class="form-control" />
                <br/>
                <label for="email">E-mail:</label>
                <input id="email" type="email" name="email" class="form-control" />
                <br/>
                <label for="content">Content:</label>
                <textarea id="content" type="text" name="content" class="form-control"></textarea>
                <br/>
                <input id="post_id" type="hidden" name="post_id" value="<?php echo $post['id'] ?>" class="form-control" />
                <input class="btn btn-default" type="submit" value="Submit"/>
            </form>
        </div>

        <div>
            <?php foreach($post['comments'] as $comment) { ?>
            <div class="comment">
                <p>From: <span class="author"><?= htmlspecialchars($comment['visitor']) ?> </span> <span class="vemail">(<?php echo htmlspecialchars($comment['email']) != null ? htmlspecialchars($comment['email']) : 'N/A'; ?> </span>)</p>
                <p><?= htmlspecialchars($comment['content']) ?></p>
            </div>
            <?php } ?>


        </div>
        <nav>
            <ul class="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
            </ul>
        </nav>

    </div><!-- /.blog-main -->

    <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
        <div class="sidebar-module sidebar-module-inset">
            <h4>Tags</h4>
            <p>
                <?php foreach($this->allTags as $tag) { ?>
                    <span class="tag" style="font-size: <?php echo ((int)$tag['uses'] * 12); ?>px"><?= htmlspecialchars($tag['name']) ?> </span>
                <?php } ?>
            </p>
        </div>
        <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
                <li><a href="#">March 2014</a></li>
                <li><a href="#">February 2014</a></li>
                <li><a href="#">January 2014</a></li>
                <li><a href="#">December 2013</a></li>
                <li><a href="#">November 2013</a></li>
                <li><a href="#">October 2013</a></li>
                <li><a href="#">September 2013</a></li>
                <li><a href="#">August 2013</a></li>
                <li><a href="#">July 2013</a></li>
                <li><a href="#">June 2013</a></li>
                <li><a href="#">May 2013</a></li>
                <li><a href="#">April 2013</a></li>
            </ol>
        </div>
    </div><!-- /.blog-sidebar -->

</div><!-- /.row -->