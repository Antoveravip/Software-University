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

            <p><span class="tags">Tags: <?= htmlspecialchars($post['views']) ?> </span></p>
            <p><span class="viewed">Viewed: <?= htmlspecialchars($post['views']) ?> times.</span></p>
        </div><!-- /.blog-post -->
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
            <p></p>
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