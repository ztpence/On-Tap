DROP DATABASE IF EXISTS onTap_db;

CREATE DATABASE onTap_db;

USE onTap_db;

CREATE TABLE beerList (
    id INT(11) AUTO_INCREMENT NOT NULL,
    brewery_name VARCHAR(100) NOT NULL,
    city_name VARCHAR(50) NOT NULL,
    beer_name VARCHAR(50) NOT NULL,
    beer_type VARCHAR(50),
    PRIMARY KEY(id)    
)


