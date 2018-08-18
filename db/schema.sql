CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
id int(10) AUTO_INCREMENT NOT NULL,
burger_name varchar(30) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);

