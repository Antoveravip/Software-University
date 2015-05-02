<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Petar Ivanov">
    <link rel="icon" href="<?= DX_ROOT_URL ?>content/images/favicon.ico">

    <title>
        <?php if (isset($this->title)) echo htmlspecialchars($this->title) ?>
    </title>

    <!-- Latest compiled and minified CSS -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

    <link type="text/css" rel="stylesheet" href="<?= DX_ROOT_URL ?>content/styles/styles.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<header>
    <nav class="navbar navbar-default navbar-inverse">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainmenu">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><img src="content/images/logo.png"></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="mainmenu">
                <ul class="nav navbar-nav">
                    <li <?php if ('Home' == $this->title) { echo 'class="active"'; } ?>><a href="<?php echo DX_ROOT_URL; ?>">Home <?php if ('Home' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Project' == $this->title) { echo 'class="active"'; } ?>><a href="<?php echo DX_ROOT_URL; ?>blog/">Project <?php if ('Project' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Blog' == $this->title) { echo 'class="active"'; } ?>><a href="<?php echo DX_ROOT_URL; ?>posts/">Blog <?php if ('Blog' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <?php if($this->isEditor) { ?>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Add <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="<?php echo DX_ROOT_URL; ?>posts/create/">Post</a></li>
                            <li class="divider"></li>
                            <li><a href="<?php echo DX_ROOT_URL; ?>categories/create">Category</a></li>
                        </ul>
                    </li>
                    <?php } ?>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button name="search" type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <?php if($this->isLoggedIn) { ?>
                    <li><span id="name">Hello, <?= $_SESSION['username'] ?></span></li>
                    <?php } ?>
                    <?php if($this->isAdmin) { ?>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Administration <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Profile</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Posts</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Categories</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Tags</a></li>
                        </ul>
                    </li>
                    <?php } ?>
                <?php if($this->isLoggedIn) { ?>
                    <li><form action="<?php echo DX_ROOT_URL; ?>account/logout" method="POST"><input id="" class="btn btn-default" type="submit" value="Logout" /></form></li>
                <?php } else { ?>
                    <li <?php if ('Login' == $this->title) { echo 'class="active"'; } ?>><a href="<?php echo DX_ROOT_URL; ?>account/login">Login <?php if ('Login' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Register' == $this->title) { echo 'class="active"'; } ?>><a href="<?php echo DX_ROOT_URL; ?>account/register">Register <?php if ('Register' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                <?php } ?>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>
<div class="container">

<?php include_once('views/layouts/messages.php'); ?>