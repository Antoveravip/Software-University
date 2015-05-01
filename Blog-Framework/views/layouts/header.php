<?php ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Petar Ivanov">
    <link rel="icon" href="content/images/favicon.ico">

    <title>
        <?php if (isset($this->title)) echo htmlspecialchars($this->title) ?>
    </title>

    <!-- Latest compiled and minified CSS -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

    <link type="text/css" rel="stylesheet" href="content/styles/styles.css" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<header>
    <nav class="navbar navbar-default">
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
                    <li <?php if ('Home' == $this->title) { echo 'class="active"'; } ?>><a href="/">Home <?php if ('Home' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Blog' == $this->title) { echo 'class="active"'; } ?>><a href="/">Blog <?php if ('Blog' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Add <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Post</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Category</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button name="search" type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><span id="name">Hello, </span></li>
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
                    <li <?php if ('Logout' == $this->title) { echo 'class="active"'; } ?>><a href="/logout">Logout <?php if ('Logout' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Login' == $this->title) { echo 'class="active"'; } ?>><a href="/login">Login <?php if ('Login' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                    <li <?php if ('Register' == $this->title) { echo 'class="active"'; } ?>><a href="/register">Register <?php if ('Register' == $this->title) { echo '<span class="sr-only">(current)</span>'; } ?></a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>
<div class="container">

<?php include('messages.php'); ?>