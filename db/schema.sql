DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
id int(10) AUTO_INCREMENT NOT NULL,
burger_name varchar(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY (id)
);