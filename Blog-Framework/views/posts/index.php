<h1><?= htmlspecialchars($this->title) ?></h1>

<table>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Action</th>
    </tr>
    <?php foreach ($this->posts as $post) : ?>
        <tr>
            <td><?= $post['id'] ?></td>
            <td><?= htmlspecialchars($post['title']) ?></td>
            <td><?= htmlspecialchars($post['published']) ?></td>
            <td><?= htmlspecialchars($post['content']) ?></td>
            <td><?= htmlspecialchars($post['view']) ?></td>
            <td><?= htmlspecialchars($post['category']) ?></td>
            <td><a href="<?= DX_ROOT_URL ?>posts/read/<?= $post['id']?> ">Read more...</a></td>
        </tr>
    <?php endforeach ?>
</table>

<a href="/authors/create">[New]</a>