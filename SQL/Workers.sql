CREATE DATABASE IF NOT EXISTS workers;

USE workers;

CREATE TABLE IF NOT EXISTS workers (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
position_id INT UNSIGNED NOT NULL,
salary INT UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS position (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
position VARCHAR(30) NOT NULL
);

INSERT INTO position (id, position) VALUES (null, 'Loader');
INSERT INTO position (id, position) VALUES (null, 'Driver');
INSERT INTO position (id, position) VALUES (null, 'Bookkeeper');

INSERT INTO workers (id, first_name, last_name, position_id, salary) 
VALUES (NULL, 'Sergey', 'Kuchin', 1, 15000);
INSERT INTO workers (id, first_name, last_name, position_id, salary) 
VALUES (NULL, 'Kirill', 'Kuchin', 1, 15000);
INSERT INTO workers (id, first_name, last_name, position_id, salary) 
VALUES (NULL, 'Victor', 'Potemkin', 2, 35000);
INSERT INTO workers (id, first_name, last_name, position_id, salary) 
VALUES (NULL, 'Anna', 'Vilkina', 3, 45000);
INSERT INTO workers (id, first_name, last_name, position_id, salary) 
VALUES (NULL, 'Valentin', 'Pushkin', 1, 35000);

SELECT first_name, last_name, salary FROM workers.workers WHERE salary<30000;
SELECT first_name, last_name, position, salary FROM workers.workers INNER JOIN workers.position ON position_id=position.id WHERE salary<30000 AND position='Loader'; 

CREATE TABLE IF NOT EXISTS relation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
boss_id INT UNSIGNED NOT NULL,
sub_id INT UNSIGNED NOT NULL
);


INSERT INTO relation (id, boss_id, sub_id) VALUES (null, 5, 1);
INSERT INTO relation (id, boss_id, sub_id) VALUES (null, 5, 2);
INSERT INTO relation (id, boss_id, sub_id) VALUES (null, 4, 3);


SELECT first_name, last_name, position, salary FROM (workers.workers INNER JOIN workers.position ON workers.position_id = position.id) 
INNER JOIN relation ON workers.id=relation.sub_id WHERE boss_id=5 ;