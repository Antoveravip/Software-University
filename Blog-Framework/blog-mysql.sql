-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Време на генериране: 
-- Версия на сървъра: 5.6.11
-- Версия на PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- БД: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- Структура на таблица `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categories_categories1_idx` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Схема на данните от таблица `categories`
--

INSERT INTO `categories` (`id`, `name`, `category_id`) VALUES
(1, 'Uncategorized', NULL),
(2, 'Travel', NULL);

-- --------------------------------------------------------

--
-- Структура на таблица `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visitor` varchar(150) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `content` TEXT NULL,
  `post_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_comments_posts1_idx` (`post_id`),
  KEY `fk_comments_statuses1_idx` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `comments`
--

INSERT INTO `comments` (`id`, `visitor`, `email`, `content`, `post_id`, `status_id`) VALUES
(1, 'Ivan', 'eatas@abv.bg', 'Some comments', 38, 1);

-- --------------------------------------------------------

--
-- Структура на таблица `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL,
  `published` datetime NOT NULL,
  `content` text,
  `views` int(11) DEFAULT '0',
  `category_id` int(11) NOT NULL DEFAULT '1',
  `status_id` int(11) NOT NULL DEFAULT '1',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_categories1_idx` (`category_id`),
  KEY `fk_posts_statuses1_idx` (`status_id`),
  KEY `fk_posts_users1_idx` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- Схема на данните от таблица `posts`
--

INSERT INTO `posts` (`id`, `title`, `published`, `content`, `views`, `category_id`, `status_id`, `user_id`) VALUES
(1, 'Test', '2015-01-01 00:00:00', 'Test content', 0, 2, 2, 1),
(2, 'Test 1', '2015-01-02 00:00:00', 'Test content', 0, 2, 2, 1),
(3, 'Test 2', '2015-01-03 00:00:00', 'Test 2 content', 0, 2, 2, 1),
(4, 'Test 3', '2015-02-01 00:00:00', 'Test 3 content', 8, 2, 2, 1),
(5, 'Test 4', '2015-02-02 00:00:00', 'Test 4 content', 0, 2, 2, 1),
(6, 'Test 5', '2015-02-03 00:00:00', 'Test 5 content', 0, 2, 2, 1),
(7, 'Test 6', '2015-03-01 00:00:00', 'Test 6 content', 0, 2, 2, 1),
(8, 'Test 7', '2015-03-02 00:00:00', 'Test 7 content', 0, 2, 2, 1),
(9, 'Test 8', '2015-03-03 00:00:00', 'Test 8 content', 0, 2, 2, 1),
(10, 'Test 9', '2015-04-01 00:00:00', 'Test 9 content', 0, 2, 2, 1),
(11, 'Test 10', '2015-04-02 00:00:00', 'Test 10 content', 0, 2, 2, 1),
(12, 'Test 11', '2015-04-03 00:00:00', 'Test 11 content', 0, 2, 2, 1),
(13, 'Test 12', '2015-03-21 00:00:00', 'Test 12 content', 0, 2, 2, 1),
(14, 'Test 13', '2015-04-11 00:00:00', 'Test 13 content', 0, 2, 2, 1),
(15, 'Test 14', '2015-04-12 00:00:00', 'Test 14 content', 0, 2, 2, 1),
(16, 'Test 15', '2015-04-13 00:00:00', 'Test 15 content', 0, 2, 2, 1),
(17, 'Test 16', '2015-04-14 00:00:00', 'Test 16 content', 0, 2, 2, 1),
(18, 'Test 17', '2015-04-15 00:00:00', 'Test 17 content', 0, 2, 2, 1),
(19, 'Test 18', '2015-04-16 00:00:00', 'Test 18 content', 0, 2, 2, 1),
(20, 'Test 19', '2015-04-17 00:00:00', 'Test 19 content', 0, 2, 2, 1),
(21, 'Test 20', '2015-04-18 00:00:00', 'Test 20 content', 0, 2, 2, 1),
(22, 'Test 21', '2015-04-19 00:00:00', 'Test 21 content', 9, 2, 2, 1),
(23, 'New Post', '2015-05-02 07:11:22', 'New content from post', 0, 2, 2, 3),
(24, 'New Post', '2015-05-02 07:14:48', 'fdsfdsfsd', 0, 2, 2, 3),
(27, 'Test title', '2015-05-02 07:34:43', 'some content', 0, 1, 1, 3),
(28, 'Test title', '2015-05-02 07:39:05', 'some content', 0, 1, 1, 3),
(29, 'Test title', '2015-05-02 07:45:37', 'fdsfds', 0, 1, 1, 3),
(30, 'Test title', '2015-05-02 07:49:39', 'fdsfds', 0, 1, 1, 3),
(31, 'Test title', '2015-05-02 07:52:58', 'fdsfds', 0, 1, 1, 3),
(32, 'Test title', '2015-05-02 09:20:14', 'fdsfds', 0, 1, 1, 3),
(33, 'fdsfd', '2015-05-02 09:20:53', 'fsdfds', 0, 1, 1, 3),
(34, 'fdsfd', '2015-05-02 09:23:21', 'fsdfds', 0, 1, 1, 3),
(35, 'fdsfd', '2015-05-02 09:24:11', 'fsdfds', 0, 1, 1, 3),
(36, 'fdsfd', '2015-05-02 09:28:05', 'fsdfds', 0, 1, 1, 3),
(37, 'fdsfd', '2015-05-02 09:30:58', 'fsdfds', 0, 1, 1, 3),
(38, 'ddsds', '2015-05-02 09:32:00', 'dsdssd', 16, 1, 1, 3);

-- --------------------------------------------------------

--
-- Структура на таблица `posts_tags`
--

DROP TABLE IF EXISTS `posts_tags`;
CREATE TABLE IF NOT EXISTS `posts_tags` (
  `post_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  KEY `fk_posts_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_posts_has_tag_posts_idx` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `posts_tags`
--

INSERT INTO `posts_tags` (`post_id`, `tag_id`) VALUES
(36, 1),
(37, 1),
(38, 1),
(38, 5);

-- --------------------------------------------------------

--
-- Структура на таблица `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Схема на данните от таблица `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'editor');

-- --------------------------------------------------------

--
-- Структура на таблица `statuses`
--

DROP TABLE IF EXISTS `statuses`;
CREATE TABLE IF NOT EXISTS `statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Схема на данните от таблица `statuses`
--

INSERT INTO `statuses` (`id`, `name`) VALUES
(1, 'draft'),
(2, 'published');

-- --------------------------------------------------------

--
-- Структура на таблица `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `uses` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Схема на данните от таблица `tags`
--

INSERT INTO `tags` (`id`, `name`, `uses`) VALUES
(1, 'test', 4),
(2, 'demo', 0),
(3, 'double', 0),
(4, 'first', 0),
(5, ' second', 1);

-- --------------------------------------------------------

--
-- Структура на таблица `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(150) NOT NULL,
  `password` varchar(300) NOT NULL,
  `first_name` varchar(150) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `e-mail` varchar(150) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_roles1_idx` (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Схема на данните от таблица `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `e-mail`, `role_id`) VALUES
(1, 'antoveravip', '$2y$10$1lvMNcZKkAEZ6v6Psm6AmuLoWPl9T3yEh9vLPsfcvknFhpbIy/Kl6', 'Petar', 'Ivanov', '0', 1),
(2, 'demo', '$2y$10$1lvMNcZKkAEZ6v6Psm6AmuLoWPl9T3yEh9vLPsfcvknFhpbIy/Kl6', NULL, NULL, '0', 2),
(3, 'testuser', '$2y$10$1lvMNcZKkAEZ6v6Psm6AmuLoWPl9T3yEh9vLPsfcvknFhpbIy/Kl6', NULL, NULL, NULL, 2);

--
-- Ограничения за дъмпнати таблици
--

--
-- Ограничения за таблица `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `fk_categories_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения за таблица `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_comments_posts1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_comments_statuses1` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения за таблица `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_posts_categories1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_posts_statuses1` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_posts_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения за таблица `posts_tags`
--
ALTER TABLE `posts_tags`
  ADD CONSTRAINT `fk_posts_has_tag_posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_posts_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения за таблица `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
