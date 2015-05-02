<h2>Registration</h2>

<form class="navbar-form" action="<?php echo DX_ROOT_URL; ?>account/register" method="POST">
    <label for="username">Username:</label>
    <input id="username" type="text" name="username" class="form-control" />
    <br/>
    <label for="password">Password:</label>
    <input id="password" type="password" name="password" class="form-control"/>
    <br/>
    <input class="btn btn-default" type="submit" value="Register"/>
    <a class="btn btn-default" href="<?php echo DX_ROOT_URL; ?>account/login">Login</a>
</form>