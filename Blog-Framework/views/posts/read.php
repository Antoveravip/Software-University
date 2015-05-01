<h1><?= htmlspecialchars($this->title) ?></h1>

<table>
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Action</th>
    </tr>
        <tr>
            <td><?= $this->post['id'] ?></td>
            <td><?= htmlspecialchars($this->post['title']) ?></td>
            <td><?= htmlspecialchars($this->post['published']) ?></td>
            <td><?= htmlspecialchars($this->post['content']) ?></td>
            <td><?= htmlspecialchars($this->post['view']) ?></td>
            <td><?= htmlspecialchars($this->post['category']) ?></td>
        </tr>
</table>

<a href="/authors/create">[New]</a>