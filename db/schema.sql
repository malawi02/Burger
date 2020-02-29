DROP DATABASE IF EXISTS Burgers_db

CREATE DATABASE Burgers_db;
USE Burgers_db;

CREATE TABLE Burgers (
    id INT NOT NULL AUTO_INCREMENT,
    Burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);