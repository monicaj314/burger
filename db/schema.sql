CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP(0),
PRIMARY KEY (id)
);