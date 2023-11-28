CREATE DATABASE final_project;

USE final_project;

CREATE TABLE `posts`(
    `post_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `body` VARCHAR(255) NULL
);
CREATE TABLE `comments`(
    `comments_id` INT NOT NULL,
    `post_id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `body` VARCHAR(255) NOT NULL
);
ALTER TABLE `final_project`.`comments` 
CHANGE COLUMN `comments_id` `comments_id` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE
    `comments` ADD PRIMARY KEY(`comments_id`);
CREATE TABLE `users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `user_name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `users` ADD UNIQUE `users_user_name_unique`(`user_name`);
CREATE TABLE `todo`(
    `todo_id` VARCHAR(255) NOT NULL,
    `user_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `completed` TINYINT(1) NOT NULL,
    `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE
    `todo` ADD PRIMARY KEY(`todo_id`);