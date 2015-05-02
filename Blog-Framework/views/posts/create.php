<h2>Create new post</h2>

<form class="navbar-form" action="<?php echo DX_ROOT_URL; ?>posts/create" method="POST">
    <label for="title">Title:</label>
    <input id="title" type="text" name="title" class="form-control" />
    <br/>
    <label for="content">Content:</label>
    <textarea id="content" type="text" name="content" class="form-control"></textarea>
    <br/>
    <label for="category">Category:</label>
    <select id="category" name="category" class="form-control">
        <?php foreach($this->categories as $category) { ?>
            <option value="<?php echo $category['id']; ?>"><?php echo $category['name']; ?></option>
        <?php } ?>
    </select>
    <br />
    <label for="status">Status:</label>
    <select id="status" name="status" class="form-control">
        <?php foreach($this->statuses as $status) { ?>
            <option value="<?php echo $status['id']; ?>"><?php echo $status['name']; ?></option>
        <?php } ?>
    </select>
    <br/>
    <label for="tags">Tags:</label>
    <input id="tags" type="text" name="tags" class="form-control" />
    <input id="user_id" type="hidden" name="user_id" value="<?php echo $_SESSION['id'] ?>" class="form-control" />
    <br/>
    <input class="btn btn-default" type="submit" value="Create"/>
    <a class="btn btn-default" href="<?php echo DX_ROOT_URL; ?>posts/">Cancel</a>
</form>